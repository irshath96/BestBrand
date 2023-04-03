import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// const apiUrl = "http://localhost:3000/productList";

export class ProductService {

// products: Product[] = [
//   new Product(1, 'product 1', this is the product 1 desc)
// ]

  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get<any>("http://localhost:3000/productList")
      .pipe(map((res: any) => {
        return res;
      })
      )
  }

}
