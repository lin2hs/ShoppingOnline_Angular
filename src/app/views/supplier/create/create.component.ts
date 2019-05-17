import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SupplierService } from "../../../services/supplier.service";
//import {first} from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'supplier-app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class SupplierCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private supplierService: SupplierService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
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

  }

  onSubmit() {
    this.supplierService.create(this.addForm.value)
      .then(data => {
        this.router.navigate(['supplier/index']);
      });
  }

}
