import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public totalItem ! : number; 
  // public totalItem : number = 0;


  constructor(private cart : CartService, private route : Router) { }

  ngOnInit(): void {

    this.cart.getproducts().subscribe(res => {
      this.products =res;
      this.totalItem = this.cart.getTotalPrice();

    })
    console.log(this.products);
  }

  removeItem(item:any){
    this.cart.removeCart(item);
  }

  emptyCart() {
    this.cart.removeAllCart();
  }

  removeQnt(item : any){
    // this.cart.removeCart(item);
    if(item.quantity !=1 ) {
      item.quantity -= 1;
    }
  }

  addQnt(item :any) {
    // this.cart.addtoCart(item);
    // console.log(item);
    // item.quantity = item.quantity + 1;
    // item.quantity += 1;
    if(item.quantity !=5 ) {
      item.quantity += 1;
    }
    // console.log(item.quantity);

  }

}
