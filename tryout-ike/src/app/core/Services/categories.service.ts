import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { environment } from 'src/assets/environments/environment.prod';
import { Categories, ValueCategory } from '../models/categories';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories() {
    const url = `${environment.baseApi}`;
    const params = new HttpParams().append('key', "t3stfr0ntAng2023$.").append('m', "lista_categorias");
    return this.http.get<Categories>(url, { params })
      .pipe(
        tap(categoriesData => {
        }),
        map(infoCategories => infoCategories)
      );
  }
}
