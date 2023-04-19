import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  Getproducts() {
   return this.http.get<any>("")
   .pipe(map((res:any)=>{
    return res;
   }))
  }

  // Putproducts() {
  //   return this.http.post<any>('',+products);
  // }





}
