import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MealCategoriesService {
  private readonly _HttpClient = inject(HttpClient);

  getCategories(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/categories.php`);
  }
  getMeals(category: string | null): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/filter.php?c=${category}`);
  }
}
