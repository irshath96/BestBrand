
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartList: any = [];
  public products = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts() {
    return this.products.asObservable();
  }

  setProducts(product: any) {
    this.cartList.push(...product);
   // console.log(this.cartList);
    this.products.next(product);

  }

  addtoCart(product: any) {
    console.log(product);
    const findProd = this.cartList.filter((fil: any) => {
      return product.productId == fil.productId;
    })
    if (findProd.length) {
      alert("Alredy Products Exists");
    } else {
      this.cartList.push(product);
      this.products.next(this.cartList);
      this.getTotalPrice();
    }
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCart(product: any) {
    this.cartList.map((a: any, index: any) => {
      if (product.productId === a.productId) {
        this.cartList.splice(index, 1);
      }
    })
    this.products.next(this.cartList);
  }

  removeAllCart() {
    this.cartList = [];
    this.products.next(this.cartList);
  }




}
