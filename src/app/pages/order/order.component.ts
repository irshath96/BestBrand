import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

  products = [
    {
      name : "Irshath",
      image : "./assets/products/spices/z1.jpg",
      details : "It is worthy",
      quantity : 3
    }
  ]

}
