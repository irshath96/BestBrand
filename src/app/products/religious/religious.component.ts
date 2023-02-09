import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-religious',
  templateUrl: './religious.component.html',
  styleUrls: ['./religious.component.scss']
})
export class ReligiousComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name : "Agarbatti",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/agarbatti.jpg"
    },
    {
      name : "Agarbatti Cycle 3 in One",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/agarbatti-cycle-3-in-one.jpg"
    },
    {
      name : "Agarbatti Cycle Stand",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/agarbatti-stand.jpg"
    },
    {
      name : "Camphor Cone",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/Camphor-Cone.jpg"
    }
  ]




}
