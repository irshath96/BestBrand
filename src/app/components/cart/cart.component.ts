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
 // public totalItem : number = 0;
  public vary: any;
  varientPrice: any;
  totalPrice = 0;
  token: any;
  // price : any;
  totalAmount = 0;





  constructor(private cart: CartService, private route: Router) { }

  ngOnInit(): void {

    this.cart.getproducts().subscribe(res => {
      this.products = res;
      this.totalItem = this.cart.getTotalPrice();

    })
    // console.log(this.products);
  }

  removeItem(item: any) {
    this.cart.removeCart(item);
    this.updateTotal();
  }

  emptyCart() {
    this.cart.removeAllCart();
  }

  removeQnt(a: any, item: any) {
    this.token = localStorage.getItem('role_id');

    if (this.token==1) {
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

    console.log(item.quantity * item.varientPrice.price);

    this.totalItem = item.quantity * item.varientPrice.price;
    this.products[a].total = item.quantity * item.varientPrice.price;
    this.updateTotal();
  }

  addQnt(a: any, item: any) {
     this.token = localStorage.getItem('role_id');
    // this.cart.addtoCart(item);
    // console.log(item);
    // item.quantity = item.quantity + 1;
    // item.quantity += 1;
    if (this.token==1) {

      item.quantity += 5;
      
    }
    else{
      item.quantity += 1;
    }
    // console.log(item.quantity * item.varientPrice.price);

    this.totalItem = item.quantity * item.varientPrice.price;
    this.products[a].total = item.quantity * item.varientPrice.price;
    // console.log(item.quantity);
    this.updateTotal();
  }

  updateTotal() {
    this.token = localStorage.getItem('role_id');
    if (this.token==1) {
      this.totalPrice = 0;
      console.log(this.products.total);
  
      this.products.map((prod: any) => {
  
        console.log(prod);
        if (prod.total) 
          this.totalPrice = this.totalPrice + prod.total;
      })
      console.log(this.totalPrice);
    
    }
    else{
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


  selectvary(a: any, item: any, $event: any,) {

    console.log(item);
    let varyId = $event.target.value;
    const price = item.varient.find((v: any) => {
      return varyId == v.varientId
    })

    console.log(price);
    this.products[a].varientPrice = price;
    this.products[a].total = price.price;


    // this.varientPrice = price[0].price;
    //this.products 
    console.log(this.products[a].varientPrice = price);
    console.log(this.products[a])

    this.updateTotal();
  }

  



  
  

  

}
