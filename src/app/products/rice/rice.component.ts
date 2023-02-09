import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html',
  styleUrls: ['./rice.component.scss']
})
export class RiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name : "Basmati Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/BASMATI-RICE.jpg"
    },
    {
      name : "Brown Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/BASMATI-RICE.jpg"
    },
    {
      name : "Idly Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/gopal-1024x187.jpg"
    },
    {
      name : "Ponni Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/haldirams-1024x187.jpg"
    },
    {
      name : "Rozzana Basmati Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/BASMATI-RICE.jpg"
    },
    {
      name : "Soona Masoori Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/BASMATI-RICE.jpg"
    },
    {
      name : "Surti Kolam Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/gopal-1024x187.jpg"
    }
  ]

}
