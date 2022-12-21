import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickles',
  templateUrl: './pickles.component.html',
  styleUrls: ['./pickles.component.scss']
})
export class PicklesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name : "All in one Chutney",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/all-in-one-chutney.jpg"
    },
    {
      name : "Andhra Avakaya Mango Pickle",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/andhra-avakaya-mango-pickle.jpg"
    },
    {
      name : "Andhra Gongura Pickle",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/andhra-gongura-pickle.jpg"
    },
    {
      name : "Andhra Lime Pickle",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/andhra-lime-pickle.jpg"
    },
    {
      name : "Andhra Tomato Pickle",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/andhra-tomato-pickle.jpg"
    },
    {
      name : "Bhelpuri Chutney",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/bhelpuri-chutney.jpg"
    },
    {
      name : "Briyani Paste",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/biryani-paste.jpg"
    },
    {
      name : "Bombay Sandwich Spread",
      image : "https://baldhaexport.com/wp-content/uploads/2022/01/bombay-sandwich-spread.jpg"
    }
  ]
}
