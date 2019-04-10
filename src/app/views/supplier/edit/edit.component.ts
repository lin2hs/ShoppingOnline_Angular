import { Component, OnInit } from '@angular/core';
import { SupplierService } from "../../../services/supplier.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: 'supplier-app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class SupplierEditComponent implements OnInit {

  //category: Category;
  editForm: FormGroup;
  modifyDate: Date;
  constructor(private formBuilder: FormBuilder, private router: Router, private supplierService: SupplierService) { }

  ngOnInit() {
    let supplierId = localStorage.getItem("editSupplierId");
    if (!supplierId) {
      alert("Invalid action.")
      this.router.navigate(['supplier/index']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      company: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      fax: ['', Validators.required],
      valid: [],
      modify: []
    });
    this.supplierService.getById(+supplierId)
      .subscribe(data => {
        this.editForm.setValue(data);
        this.modifyDate = data.modify;
      });
  }

  onSubmit() {
    this.supplierService.update(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['supplier/index']);
        },
        error => {
          alert(error);
        });
  }

}
