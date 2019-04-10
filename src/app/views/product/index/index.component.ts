import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../models/product.model";

@Component({
  selector: 'product-app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class ProductIndexComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.get()
      .subscribe( data => {
        this.products = data;
      });
  }

  deleteProduct(product: Product): void {
    this.productService.delete(product.id)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
  };

  
  detailProduct(product: Product): void {
    localStorage.removeItem("detailProductId");
    localStorage.setItem("detailProductId", product.id.toString());
    this.router.navigate(['product/detail']);
  };

  editProduct(product: Product): void {
    localStorage.removeItem("editProductId");
    localStorage.setItem("editProductId", product.id.toString());
    this.router.navigate(['product/edit']);
  };

  addProduct(): void {
    this.router.navigate(['product/create']);
  };
}
