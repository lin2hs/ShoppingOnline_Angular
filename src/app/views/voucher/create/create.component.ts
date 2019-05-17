import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CategoryService } from "../../../services/category.service";
//import {first} from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'category-app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private categoryService: CategoryService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      valid: [],
      modify: []
    });

  }

  onSubmit() {
    this.categoryService.create(this.addForm.value)
      .then(data => {
        this.router.navigate(['category/index']);
      });
  }

}
