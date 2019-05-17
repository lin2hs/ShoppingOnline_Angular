import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OrderService } from "../../../services/order.service";
//import {first} from "rxjs/operators";
import { Router } from "@angular/router";
// import { User } from 'src/app/models/user.model';

@Component({
  selector: 'order-app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class OrderCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private orderService: OrderService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      valid: [],
      shipped: [],
      orderdate: [],
      modify: [],
      userid: []
    });

  }

  // get f() { return this.addForm.controls; }

  onSubmit() {
    // let userOrder: User = new User();
    // userOrder = this.f.userid.value;
    this.orderService.create(this.addForm.value)
      .then(data => {
        this.router.navigate(['order/index']);
      });
  }

}
