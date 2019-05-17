import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { OrderService } from "../../../services/order.service";
import { Order } from "../../../models/order.model";

@Component({
  selector: 'order-app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class OrderIndexComponent implements OnInit {

  orders: Order[];

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.get()
      .subscribe(data => {
        this.orders = data;
      });
  }

  deleteOrder(order: Order): void {
    this.orderService.delete(order.id)
      .then(data => {
        this.orders = this.orders.filter(u => u !== order);
      })
  };

  editOrder(order: Order): void {
    localStorage.removeItem("editOrderId");
    localStorage.setItem("editOrderId", order.id.toString());
    this.router.navigate(['order/edit']);
  };

  addOrder(): void {
    this.router.navigate(['order/create']);
  };
}
