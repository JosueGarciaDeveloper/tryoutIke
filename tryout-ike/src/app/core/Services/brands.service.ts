import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs';
import { environment } from 'src/assets/environments/environment.prod';
import { Categories } from '../models/categories';
import { Brands } from '../models/brands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) { }

  getBrands(limitToShow?: number, categoryId?: number) {
    const url = `${environment.baseApi}`;
    const params = new HttpParams().append('key', "t3stfr0ntAng2023$.").append('m', "lista_marcas").append('limit',`${limitToShow}`).append('id_categoria',`${categoryId}`);
    return this.http.get<Brands>(url, { params })
      .pipe(
        tap(brandsInfo => {

      }),
        map(infoCategories => infoCategories)
      );
  }
  getGeneralBrands(limitToShow?: number) {
    const url = `${environment.baseApi}`;
    const params = new HttpParams().append('key', "t3stfr0ntAng2023$.").append('m', "lista_marcas").append('limit',`${limitToShow}`);
    return this.http.get<Brands>(url, { params })
      .pipe(
        tap(brandsInfo => {
        }),
        map(infoCategories => infoCategories)
      );
  }
}
