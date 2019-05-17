import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SupplierService } from "../../../services/supplier.service";
import { Supplier } from "../../../models/supplier.model";

@Component({
  selector: 'supplier-app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class SupplierIndexComponent implements OnInit {

  suppliers: Supplier[];

  constructor(private router: Router, private categoryService: SupplierService) { }

  ngOnInit() {
    this.categoryService.get()
      .subscribe( data => {
        this.suppliers = data;
      });
  }

  deleteSupplier(supplier: Supplier): void {
    this.categoryService.delete(supplier.id)
      .then( data => {
        this.suppliers = this.suppliers.filter(u => u !== supplier);
      })
  };

  editSupplier(supplier: Supplier): void {
    localStorage.removeItem("editSupplierId");
    localStorage.setItem("editSupplierId", supplier.id.toString());
    this.router.navigate(['supplier/edit']);
  };

  addSupplier(): void {
    this.router.navigate(['supplier/create']);
  };
}
