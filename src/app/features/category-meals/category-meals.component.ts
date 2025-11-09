import { Component, OnInit } from '@angular/core';
import { MealCategoriesService } from '../../shared/services/meal-categories.service';
import { ActivatedRoute } from '@angular/router';
import { Variables } from '../../variables/variables';
import { IMeals } from '../../core/interfaces/imeals.interface';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@Component({
  selector: 'app-category-meals',
  imports: [NgxPaginationModule],
  templateUrl: './category-meals.component.html',
  styleUrl: './category-meals.component.css',
})
export class CategoryMealsComponent implements OnInit {
  constructor(
    private _MealCategoriesService: MealCategoriesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  mealCategory!: string | null;
  meals: IMeals[] = [];
  // for pagination
  p: number = 1;
  pageSize: number = 12;
  total: number = 0;

  // pageTitle: any = Variables.title;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.mealCategory = param.get('c');
        // this.pageTitle = this.mealCategory
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._MealCategoriesService.getMeals(this.mealCategory).subscribe({
      next: (res) => {
        this.meals = res.meals;
        this.total = res.meals.length;
        console.log(this.meals);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  pageChanged(event: any) {
    this.p = event
   
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
