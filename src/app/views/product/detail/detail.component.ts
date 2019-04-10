import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Supplier } from 'src/app/models/supplier.model';
import { Category } from 'src/app/models/category.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  //Create data to display
  supplier: any;
  category: any;
  modifyDate: Date;

  detailForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private productService: ProductService,
    // private categoryService: CategoryService,
    // private supplierService: SupplierService
  ) { }

  ngOnInit() {
    let productId = localStorage.getItem("detailProductId");
    if (!productId) {
      alert("Invalid action.")
      this.router.navigate(['product/index']);
      return;
    }
    this.detailForm = this.formBuilder.group({
      id: [],
      name: [],
      description: [],
      price: [],
      quantity: [],
      thumbnail: [],
      // cateid: [],
      // category: [],
      // supplierid: [],
      // supplier: [],
      valid: [],
      modify: []
    });

    // Load dữ liệu để nạp vào combobox categories
    // this.categoryService.get().subscribe(data => {
    //   this.categories = data;
    // });

    // // Load dữ liệu để nạp vào combobox suppliers
    // this.supplierService.get().subscribe(data => {
    //   this.suppliers = data;
    // });

    this.productService.getById(+productId)
      .subscribe(data => {
        this.detailForm.patchValue({
          id: data.id, name: data.name, description: data.description,
          price: data.price, quantity: data.quantity, thumbnail: data.thumbnail,
          valid: data.valid
        });
        this.category = data.category;
        this.supplier = data.supplier;
        this.modifyDate = data.modify;
      });
  }
}
