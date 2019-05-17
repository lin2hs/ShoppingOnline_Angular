import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../../services/order.service";
import { Router } from "@angular/router";
//import {Category} from "../../../models/category.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from 'src/app/models/user.model';

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
  userOrder: User;
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
      orderdate: [],
      modify: [],
      userid: []
    });
    this.orderService.getById(+orderId)
      .subscribe(data => {
        this.userOrder = data.userid;
        this.modifyDate = data.modify;
        this.createdDate = data.orderdate;
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.orderService.update(this.editForm.value)
      .then(
        data => {
          this.router.navigate(['order/index']);
        },
        error => {
          alert(error);
        });
  }

}
