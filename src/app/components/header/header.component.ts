import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalCount: number = 0;
  menuType:string = 'default' ;

  constructor(private cart: CartService, private route: Router) { }

  ngOnInit(): void {

    this.cart.getProducts().subscribe(res => {
      this.totalCount = res.length;
    })
  }



  login() {
    if(localStorage.getItem('role_id')) {
      this.route.navigate(['cart']);
      this.menuType = "user";
    } else {
      this.menuType = 'default';
      this.route.navigate(['login']);
    }

  }

  logout() {
    localStorage.removeItem('role_id');
    this.route.navigate(['home']);
  }

}
