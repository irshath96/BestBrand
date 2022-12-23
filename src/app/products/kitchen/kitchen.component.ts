import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

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
