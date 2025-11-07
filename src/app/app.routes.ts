import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CategoryMealsComponent } from './features/category-meals/category-meals.component';
import { Variables } from './variables/variables';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home - Recipe Hub',
  },

  { path: 'home', component: HomeComponent, title: 'Home - Recipe Hub' },
  
  //TODO: Make this Signal to reflect
  { path: 'meals/:c', component: CategoryMealsComponent, title: 'Meal Category' }, 
];
