import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name : "Bikaji",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/bikaji-1024x187.jpg"
    },
    {
      name : "Chheda's",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/Chheda-1024x187.jpg"
    },
    {
      name : "Gopal Namkeen",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/gopal-1024x187.jpg"
    },
    {
      name : "Haldiram",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/haldirams-1024x187.jpg"
    }
  ]

}
