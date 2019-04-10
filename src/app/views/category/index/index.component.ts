import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CategoryService } from "../../../services/category.service";
import { Category } from "../../../models/category.model";

@Component({
  selector: 'category-app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class CategoryIndexComponent implements OnInit {

  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.get()
      .subscribe( data => {
        this.categories = data;
      });
  }

  deleteCategory(category: Category): void {
    this.categoryService.delete(category.id)
      .subscribe( data => {
        this.categories = this.categories.filter(u => u !== category);
      })
  };

  editCategory(category: Category): void {
    localStorage.removeItem("editCategoryId");
    localStorage.setItem("editCategoryId", category.id.toString());
    this.router.navigate(['category/edit']);
  };

  addCategory(): void {
    this.router.navigate(['category/create']);
  };
}
