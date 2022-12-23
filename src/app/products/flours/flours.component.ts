import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flours',
  templateUrl: './flours.component.html',
  styleUrls: ['./flours.component.scss']
})
export class FloursComponent implements OnInit {

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
