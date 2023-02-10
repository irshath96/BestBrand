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

  public products: any;

  constructor(private api: ProductService, private cart: CartService, private http : HttpClient) { }

  ngOnInit(): void {

  //  this.api.getProductList().subscribe(res => {
  //     this.products = res;

  //     this.products.forEach((a: any) => {
  //       Object.assign(a,{ quantity: 1, total: a.price });
  //     });
  //     console.log(this.products);
  //   })

  this.getProductData();
  }

  addtoCart(item: any) {
    this.cart.addtoCart(item);
  }



  getProductData() {
    this.http.get('/assets/data/product.json').subscribe(res=>{
      this.products =res;

      this.products.forEach((a:any)=> {
        Object.assign(a,{quantity:1, total:a.price});
      });
    })
  }

}
