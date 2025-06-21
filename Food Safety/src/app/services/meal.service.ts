import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php/lang=pt_BR';

  constructor(private http: HttpClient) {}
getMealByName(name: string): Observable<any> {
  return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
}

 getMealById(id: string): Observable<any> {
  return this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
}


}