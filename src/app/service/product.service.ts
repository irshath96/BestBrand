import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

getProductList()
{
  return this.http.get<any>("http://localhost:3000/productList")
  .pipe(map((res:any)=>{
    return res;
  }))
}





}
