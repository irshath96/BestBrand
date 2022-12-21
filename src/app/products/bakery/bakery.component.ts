import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss']
})
export class BakeryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name : "Baker Street",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/baker-street.jpg"
    }
  ]

}
