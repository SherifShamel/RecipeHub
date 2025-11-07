import { Component, OnInit } from '@angular/core';
import { MealCategoriesService } from '../../shared/services/meal-categories.service';
import { ActivatedRoute } from '@angular/router';
import { Variables } from '../../variables/variables';
import { IMeals } from '../../core/interfaces/imeals.interface';

@Component({
  selector: 'app-category-meals',
  imports: [],
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
        console.log(this.meals);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
