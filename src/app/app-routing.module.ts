import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryIndexComponent } from "./views/category/index/index.component";
import { CategoryCreateComponent } from "./views/category/create/create.component";
import { CategoryEditComponent } from "./views/category/edit/edit.component";
import { SupplierIndexComponent } from "./views/supplier/index/index.component";
import { SupplierCreateComponent } from './views/supplier/create/create.component';
import { SupplierEditComponent } from './views/supplier/edit/edit.component';
import { OrderIndexComponent } from "./views/order/index/index.component";
import { OrderCreateComponent } from './views/order/create/create.component';
import { OrderEditComponent } from './views/order/edit/edit.component';
import { ProductIndexComponent } from "./views/product/index/index.component";
import { ProductDetailComponent } from './views/product/detail/detail.component';
import { ProductCreateComponent } from './views/product/create/create.component';
import { ProductEditComponent } from './views/product/edit/edit.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { VoucherComponent } from './views/voucher/index/index.component'

const routes: Routes = [
  { path: 'category/index', component: CategoryIndexComponent },
  { path: 'category/create', component: CategoryCreateComponent },
  { path: 'category/edit', component: CategoryEditComponent },
  { path: 'supplier/index', component: SupplierIndexComponent },
  { path: 'supplier/create', component: SupplierCreateComponent },
  { path: 'supplier/edit', component: SupplierEditComponent },
  { path: 'order/index', component: OrderIndexComponent },
  { path: 'order/create', component: OrderCreateComponent },
  { path: 'order/edit', component: OrderEditComponent },
  { path: 'product/index', component: ProductIndexComponent },
  { path: 'product/detail', component: ProductDetailComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/edit', component: ProductEditComponent },\
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
