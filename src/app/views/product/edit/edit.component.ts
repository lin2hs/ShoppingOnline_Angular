import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { ProductService } from "src/app/services/product.service";
import { CategoryService } from 'src/app/services/category.service';
import { SupplierService } from 'src/app/services/supplier.service';

import { Category } from "src/app/models/category.model";
import { Supplier } from "src/app/models/supplier.model";

@Component({
  selector: 'product-app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProductEditComponent implements OnInit {

  categories: Category[];
  suppliers: Supplier[];
  editForm: FormGroup;
  modifyDate: Date;
  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService, private categoryService: CategoryService, private supplierService: SupplierService) { }
  ngOnInit() {
    let productId = localStorage.getItem("editProductId");
    if (!productId) {
      alert("Invalid action.")
      this.router.navigate(['product/index']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      modify: [],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      thumbnail: [''],
      valid: [],
      category: [],
      supplier: [],
      supplierId: [],
      categoryId: [],
    });
    //Load data to input into select tag
    this.categoryService.get().subscribe(data => {
      this.categories = data;
    });
    //Load data to input into select tag
    this.supplierService.get().subscribe(data => {
      this.suppliers = data;
    });
    this.productService.getById(+productId)
      .subscribe(data => {
        this.editForm.patchValue({
          id: data.id, name: data.name, description: data.description,
          price: data.price, quantity: data.quantity, thumbnail: data.thumbnail, categoryId: data.category.id,
          category: data.category, supplierId: data.supplier.id, supplier: data.supplier,
          valid: data.valid, modify: data.modify
        });
        this.modifyDate = data.modify;
      });
  }

  onSubmit() {
    // Lấy lại đối tượng category thông qua cateid được chọn
    let category: Category = new Category();
    category = this.categories.find(x => x.id == this.editForm.value.categoryId);
    this.editForm.patchValue({ 'category': category });

    // Lấy lại đối tượng supplier thông qua supplierid được chọn
    let supplier: Supplier = new Supplier();
    supplier = this.suppliers.find(x => x.id == this.editForm.value.supplierId);
    this.editForm.patchValue({ 'supplier': supplier });

    this.productService.update(this.editForm.value)
      .then(
        data => {
          this.router.navigate(['product/index']);
        },
        error => {
          alert(error);
        });
  }
}
