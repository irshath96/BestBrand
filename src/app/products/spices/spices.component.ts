import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.scss']
})
export class SpicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name: "Chilli Powder",
      image: "./assets/products/spices/z1.jpg"
    },
    {
      name: "Turmeric Powder",
      image: "./assets/products/spices/z2.jpg"
    },
    {
      name: "Black Pepper Powder",
      image: "./assets/products/spices/z3.jpg"
    },
    {
      name: "Garlic Powder",
      image: "./assets/products/spices/z4.jpg"
    },
    {
      name: "Coriander Seed Powder",
      image: "./assets/products/spices/z5.jpg"
    },
    {
      name: "Cumin Powder",
      image: "./assets/products/spices/z6.jpg"
    },
    {
      name: "Coriander & Cumin Powder",
      image: "./assets/products/spices/z7.jpg"
    },
    {
      name: "Kashmiri Chilli Powder",
      image: "./assets/products/spices/z8.jpg"
    },
    {
      name: "Paprika Powder",
      image: "./assets/products/spices/z9.jpg"
    },
    {
      name: "White Pepper Powder",
      image: "./assets/products/spices/z10.jpg"
    },
    {
      name: "Dry Ginger Powder",
      image: "./assets/products/spices/z11.jpg"
    },
    {
      name: "Fenugreek Powder",
      image: "./assets/products/spices/z12.jpg"
    },
    {
      name: "Garam Masala Powder",
      image: "./assets/products/spices/z13.jpg"
    },
    {
      name: "Sambar Powder",
      image: "./assets/products/spices/z14.jpg"
    },
    {
      name: "Idli Podi Masala",
      image: "./assets/products/spices/z15.jpg"
    },
    {
      name: "Chicken 65 Masala",
      image: "./assets/products/spices/z16.jpg"
    },
    {
      name: "Mutton Masala",
      image: "./assets/products/spices/z17.jpg"
    },
    {
      name: "Fish Fry Masala",
      image: "./assets/products/spices/z18.jpg"
    },
    {
      name: "Biryani Masala",
      image: "./assets/products/spices/z19.jpg"
    },
    {
      name: "Biryani Masala",
      image: "./assets/products/spices/z20.jpg"
    }
  ]





}
