import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs';
import { environment } from 'src/assets/environments/environment.prod';
import { Coupuns } from '../models/coupons';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(private http: HttpClient) { }
  getCategories(idBrand: number) {
    const url = `${environment.baseApi}`;
    const params = new HttpParams().append('key', "t3stfr0ntAng2023$.").append('m', "cupon_viveplus").append('id_marca', `${idBrand}`);
    return this.http.get<Coupuns>(url, { params })
      .pipe(
        tap(couponsData => {
        }),
        map(infoCategories => infoCategories)
      );
  }
}
