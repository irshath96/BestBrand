import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public totalItem !: number;
  totalPrice = 0;
  totalAmount = 0;
  token:any;
  vary:any;
  varientPrice:any;


  constructor(private cart: CartService, private router: Router ) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=> {
      this.products = res;
      this.totalItem = this.cart.getTotalPrice();
    })
console.log(this.products);
  }


  addQnt(a:any,item:any){
    this.token = localStorage.getItem('role_id');
    if (this.token == 1) {

      item.quantity += 5;
      
    }
    else{
      item.quantity += 1;
    }
    // console.log(item.quantity * item.varientPrice.price);

    this.totalItem = item.quantity * item.variantPrice.price;
    this.products[a].total = item.quantity * item.variantPrice.price;
    // console.log(item.quantity);
    this.updateTotal();
  }

  removeQnt(a:any,item:any){
    this.token = localStorage.getItem('role_id');

    if (this.token == 1) {
      if (item.quantity > 5) {
        item.quantity -= 5;
      }
      else{
        alert('You are in admin role, so please try to purchase 5 or more quantity ');
      }
    }
    else{
      if (item.quantity > 1) {
        item.quantity -= 1;
      }else{
        alert('You please try to purchase 1 or more quantity ');
      }
    }
    // this.cart.removeCart(item);

    console.log(item.quantity * item.variantPrice.price);

    this.totalItem = item.quantity * item.variantPrice.price;
    this.products[a].total = item.quantity * item.variantPrice.price;
    this.updateTotal();

  }

  updateTotal() {
    this.token = localStorage.getItem('role_id');
    if (this.token == 1) {
      this.totalPrice = 0;
      console.log(this.products.total);

      this.products.map((prod: any) => {

        console.log(prod);
        if (prod.total)
          this.totalPrice = this.totalPrice + prod.total;
      })
      console.log(this.totalPrice);

    }
    else {
      this.totalPrice = 0;
      console.log(this.products.total);

      this.products.map((prod: any) => {

        console.log(prod);
        if (prod.total)
          this.totalPrice = this.totalPrice + prod.total;
      })
      console.log(this.totalPrice);
    }

  }

  selectvary(a:any, item:any, $event:any){
    
    console.log(item);
    let varyId = $event.target.value;
    const price = item.variant.find((v: any) => {
      return varyId == v.variantId
    })

    console.log(price);
    this.products[a].variantPrice = price;
    this.products[a].total = price.price;


    // this.varientPrice = price[0].price;
    //this.products 
    console.log(this.products[a].variantPrice = price);
    console.log(this.products[a])

    this.updateTotal();
  }

  removeItem(item:any){
    this.cart.removeCart(item);
    this.updateTotal();
  }

  emptyCart() {
    this.cart.removeAllCart();
  }

}
