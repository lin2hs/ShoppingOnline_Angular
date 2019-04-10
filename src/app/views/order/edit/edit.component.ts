import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../../services/order.service";
import { Router } from "@angular/router";
//import {Category} from "../../../models/category.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: 'order-app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class OrderEditComponent implements OnInit {

  //category: Category;
  editForm: FormGroup;
  createdDate: Date;
  modifyDate: Date;
  constructor(private formBuilder: FormBuilder, private router: Router, private orderService: OrderService) { }
  ngOnInit() {
    let orderId = localStorage.getItem("editOrderId");
    if (!orderId) {
      alert("Invalid action.")
      this.router.navigate(['order/index']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      valid: [],
      shipped: [],
      orderDate: [],
      modify: [],
      userId: []
    });
    this.orderService.getById(+orderId)
      .subscribe(data => {
        this.editForm.setValue(data);
        this.modifyDate = data.modify;
        this.createdDate = data.orderDate;
      });
  }

  onSubmit() {
    this.orderService.update(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['order/index']);
        },
        error => {
          alert(error);
        });
  }

}
