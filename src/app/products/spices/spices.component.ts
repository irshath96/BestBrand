import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.scss']
})
export class SpicesComponent implements OnInit {

  productData = [
    {
      "prodId": 1,
      "category": "Spices",
      "name": "Chilli Powder",
      "image": "assets/products/spices/z1.jpg",
      "price": 100,
      "quantity": 1
    },
    {
      "prodId": 2,
      "category": "Spices",
      "name": "Turmeric Powder",
      "image": "assets/products/spices/z2.jpg",
      "price": 200,
      "quantity": 1
    },
    {
      "prodId": 3,
      "category": "Spices",
      "name": "Black Pepper Powder",
      "image": "assets/products/spices/z3.jpg",
      "price": 300,
      "quantity": 1
    },
    {
      "prodId": 4,
      "category": "Spices",
      "name": "Garlic Powder",
      "image": "assets/products/spices/z4.jpg",
      "price": 400,
      "quantity": 1
    }
  ]




  public products: any;

  constructor(private api: ProductService, private cart: CartService, private http: HttpClient) { }

  ngOnInit(): void {

    //  this.api.getProductList().subscribe(res => {
    //     this.products = res;

    //     this.products.forEach((a: any) => {
    //       Object.assign(a,{ quantity: 1, total: a.price });
    //     });
    //     console.log(this.products);
    //   })

    this.getProductData();
    console.log(this.productData);
  }

  addtoCart(item: any) {
    this.cart.addtoCart(item);
  }



  getProductData() {
    // this.http.get('./assets/data/product.json').subscribe(res => {
    this.products = this.productData;

    this.products.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.price });
    });

  }




}
