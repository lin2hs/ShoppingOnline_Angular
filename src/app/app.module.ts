import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppBootstrapModule } from './app-bootstrap.module';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';

import { CategoryIndexComponent } from "./views/category/index/index.component";
import { CategoryCreateComponent } from './views/category/create/create.component';
import { CategoryEditComponent } from './views/category/edit/edit.component';
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

import { CategoryService } from "./services/category.service";
import { SupplierService } from "./services/supplier.service";
import { OrderService } from "./services/order.service";
import { ProductService } from "./services/product.service";
import { UserService } from "./services/user.service";
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryIndexComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    SupplierIndexComponent,
    SupplierCreateComponent,
    SupplierEditComponent,
    OrderIndexComponent,
    OrderCreateComponent,
    OrderEditComponent,
    ProductIndexComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppBootstrapModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoryService, SupplierService, OrderService, ProductService, UserService, ApiService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
