import { Component, OnInit } from '@angular/core';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.scss']
})
export class SpicesComponent implements OnInit {

  public products: any;

  constructor(private api: ProductService, private cart: CartService) { }

  ngOnInit(): void {

    this.api.getProductList().subscribe(res => {
      this.products = res;

      this.products.forEach((a: any) => {
        Object.assign(a,{ quantity: 1, total: a.price });
      });
      console.log(this.products);
    })
  }

  addtoCart(item: any) {
    this.cart.addtoCart(item);
  }

}
