import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { VoucherService } from "../../../services/voucher.service";
import { Voucher } from "../../../models/voucher.model";

@Component({
  selector: 'voucher-app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class VoucherComponent implements OnInit {

  categories: Voucher[];

  constructor(private router: Router, private categoryService: VoucherService) { }

  ngOnInit() {
    this.categoryService.get()
      .subscribe( data => {
        this.categories = data;
      });
  }

  deleteCategory(category: Voucher): void {
    this.categoryService.delete(category.id)
      .then( data => {
        this.categories = this.categories.filter(u => u !== category);
      })
  };

  editCategory(category: Voucher): void {
    localStorage.removeItem("editVoucherId");
    localStorage.setItem("ediVoucheryId", category.id.toString());
    this.router.navigate(['category/edit']);
  };

  addCategory(): void {
    this.router.navigate(['category/create']);
  };
}
