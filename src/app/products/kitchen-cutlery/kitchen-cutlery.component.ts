import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-cutlery',
  templateUrl: './kitchen-cutlery.component.html',
  styleUrls: ['./kitchen-cutlery.component.scss']
})
export class KitchenCutleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

products = [
  {
    name : "Aluminium Kadai",
    image : "https://baldhaexport.com/wp-content/uploads/2022/01/Aluminium-Kadai.jpg"
  }
]

}
