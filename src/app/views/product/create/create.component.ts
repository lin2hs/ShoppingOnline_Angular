import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

import { Router } from '@angular/router';

import { CategoryService } from 'src/app/services/category.service';

import { Category } from 'src/app/models/category.model';
import { Supplier } from 'src/app/models/supplier.model';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'product-app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // Khai báo list danh mục và nhà cung cấp để gắn vào combobox
  categories: Category[];
  suppliers: Supplier[];

  constructor(private formBuilder: FormBuilder, private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: [],
      description: [],
      price: [],
      quantity: [],
      thumbnail: [],
      // cateid: [0], // gán giá trị ban đầu là 0
      category: [],
      // supplierid: [0], // gán giá trị ban đầu là 0
      supplier: [],
      valid: [],
      modify: []
    });


    // Load dữ liệu để nạp vào combobox categories
    this.categoryService.get().subscribe(data => {
      this.categories = data;
    });

    // Load dữ liệu để nạp vào combobox suppliers
    this.supplierService.get().subscribe(data => {
      this.suppliers = data;
    });
  }

  onSubmit() {

    /* Phương pháp lấy lại từng đối tượng category, supplier 
    thông qua dịch vụ bằng cách gọi cateid và supplierid kiểu này sẽ tốn tài nguyên kết nối

  // Lấy object category
    this.categoryService.getById(+this.addForm.value.cateid)
    .subscribe( data => {
      
      // Gán category vào form
      this.addForm.patchValue({'category':data});
     
       // Lấy object supplier
      this.supplierService.getById(+this.addForm.value.supplierid)
      .subscribe( data => {

      // Gán supplier vào form
        this.addForm.patchValue({'supplier':data});
  
        this.productService.create(this.addForm.value)
          .subscribe( data => {
            this.router.navigate(['product/index']);
          });

      });

    });

    */

    // // Lấy lại đối tượng category thông qua cateid được chọn
    // let category: Category = new Category();
    // category = this.categories.find(x => x.id == this.addForm.value.cateid);
    // this.addForm.patchValue({ 'category': category });

    // // Lấy lại đối tượng supplier thông qua supplierid được chọn
    // let supplier: Supplier = new Supplier();
    // supplier = this.suppliers.find(x => x.id == this.addForm.value.supplierid);
    // this.addForm.patchValue({ 'supplier': supplier });

    this.productService.create(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['product/index']);
      });
  }

}
