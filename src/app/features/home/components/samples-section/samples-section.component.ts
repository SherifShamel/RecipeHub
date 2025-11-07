import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MealCategoriesService } from '../../../../shared/services/meal-categories.service';
import { ICategories } from '../../../../core/interfaces/icategories.interface';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';
import { RouterLink } from "@angular/router";

// register Swiper custom elements
register();

@Component({
  selector: 'app-samples-section',
  imports: [RouterLink],
  templateUrl: './samples-section.component.html',
  styleUrl: './samples-section.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SamplesSectionComponent implements OnInit {
  constructor(private _MealCategoriesService: MealCategoriesService) {}

  categories: ICategories[] = [];

  brerakpoints: any = {
    '768': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 4,
    },
    '1200': {
      slidesPerView: 5,
    },
  };

  ngOnInit(): void {
    this._MealCategoriesService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.categories;
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
