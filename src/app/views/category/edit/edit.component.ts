import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../../services/category.service";
import { Router } from "@angular/router";
//import {Category} from "../../../models/category.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: 'category-app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  //category: Category;
  editForm: FormGroup;
  modifyDate: Date;
  constructor(private formBuilder: FormBuilder, private router: Router, private categoryService: CategoryService) { }
  ngOnInit() {
    let categoryId = localStorage.getItem("editCategoryId");
    if (!categoryId) {
      alert("Invalid action.")
      this.router.navigate(['category/index']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      valid: [],
      modify: []
    });
    this.categoryService.getById(+categoryId)
      .subscribe(data => {
        this.editForm.setValue(data);
        this.modifyDate = data.modify;
      });
  }

  onSubmit() {
    this.categoryService.update(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['category/index']);
        },
        error => {
          alert(error);
        });
  }

}
