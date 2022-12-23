import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dry',
  templateUrl: './dry.component.html',
  styleUrls: ['./dry.component.scss']
})
export class DryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name: "Akhrot",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/AKHROT-WITHOUT-SEAL.jpg"
    },
    {
      name: "Anjeer",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/ANJEER.jpg"
    },
    {
      name: "Badam Whole",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/BADAM-WHOLE.jpg"
    },
    {
      name: "Black Kismis",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/KISMIS-BLACK.jpg"
    },
    {
      name: "Dry Kharek",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/DRY-KHAREK.jpg"
    },
    {
      name: "Gold Kismis",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/KISMIS-GOLD.jpg"
    },
    {
      name: "Kaju",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/KAJU.jpg"
    },
    {
      name: "Munakka",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/MUNAKKA.jpg"
    },
    {
      name: "Salted Pistachios Whole (pista)",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/SALTED-PISTA-WHOLE.jpg"
    },
    {
      name: "Simple Pistachios (pista)",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/PISTA-SIMPLE.jpg"
    }
  ]


}
