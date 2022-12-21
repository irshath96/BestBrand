import { Component, OnInit } from '@angular/core';

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
      name : "Brownn Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/BROWN-RICE.jpg"
    },
    {
      name : "Idli Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/IDLI-RICE.jpg"
    },
    {
      name : "Ponni Rice (poniya rice)",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/PONNI-RICE-PUNIYA-RICE-.jpg"
    },
    {
      name : "Rozzana Basmati Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/05/ROZZANA-BASMATI-RICE.jpg"
    },
    {
      name : "Sona Masoori Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/SONA-MASOORI-RICE.jpg"
    },
    {
      name : "Surti Kolam Rice",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/SURTI-KOLAM-RICE.jpg"
    }
  ]

}
