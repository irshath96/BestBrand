import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flour',
  templateUrl: './flour.component.html',
  styleUrls: ['./flour.component.scss']
})
export class FlourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name: "Madam",
      image: "https://baldhaexport.com/wp-content/uploads/2022/02/madam-1024x187.jpg"
    },
    {
      name: "Nutrapoorna",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/nutrapoorna-1024x187.jpg"
    },
    {
      name: "Ramdev",
      image: "https://baldhaexport.com/wp-content/uploads/2022/01/Flours.jpg"
    }
  ]


}
