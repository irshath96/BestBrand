import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.scss']
})
export class SpicesComponent implements OnInit {

  productData = [
    {
      "prodId": 1,
      "categoryId": "1",
      "name": "Chilli Powder",
      "image": "assets/products/spices/z1.jpg",
      "quantity": 5,
      "varient": [
        {
          "varientId": 1,
          "prodId": 1,
          "price": 100,
          "name": "gm",
          "desc": 100
        },
        {
          "varientId": 2,
          "prodId": 1,
          "price": 200,
          "name": "gm",
          "desc": 250
        },
        {
          "varientId": 3,
          "prodId": 1,
          "price": 300,
          "name": "gm",
          "desc": 500
        },
        {
          "varientId": 4,
          "prodId": 1,
          "price": 400,
          "name": "kg",
          "desc": 1
        }
      ]
    },
    {
      "prodId": 2,
      "categoryId": "1",
      "name": "Turmeric Powder",
      "image": "assets/products/spices/z2.jpg",
      "quantity": 5,
      "varient": [
        {
          "varientId": 4,
          "prodId": 2,
          "price": 100,
          "name": "gm",
          "desc": 100
        },
        {
          "varientId": 5,
          "prodId": 2,
          "price": 200,
          "name": "gm",
          "desc": 250
        },
        {
          "varientId": 6,
          "prodId": 2,
          "price": 300,
          "name": "gm",
          "desc": 500
        },
        {
          "varientId": 7,
          "prodId": 2,
          "price": 400,
          "name": "kg",
          "desc": 1
        }
      ]
    },
    {
      "prodId": 3,
      "categoryId": "1",
      "name": "Black Pepper Powder",
      "image": "assets/products/spices/z3.jpg",
      "quantity": 5,
      "varient": [
        {
          "varientId": 1,
          "prodId": 3,
          "price": 100,
          "name": "gm",
          "desc": 100
        },
        {
          "varientId": 2,
          "prodId": 3,
          "price": 200,
          "name": "gm",
          "desc": 250
        },
        {
          "varientId": 3,
          "prodId": 3,
          "price": 300,
          "name": "gm",
          "desc": 500
        },
        {
          "varientId": 4,
          "prodId": 3,
          "price": 400,
          "name": "kg",
          "desc": 1
        }
      ]
    },
    {
      "prodId": 4,
      "categoryId": "1",
      "name": "Garlic Powder",
      "image": "assets/products/spices/z4.jpg",
      "quantity": 5,
      "varient": [
        {
          "varientId": 1,
          "prodId": 4,
          "price": 100,
          "name": "gm",
          "desc": 100
        },
        {
          "varientId": 2,
          "prodId": 4,
          "price": 200,
          "name": "gm",
          "desc": 250
        },
        {
          "varientId": 3,
          "prodId": 4,
          "price": 300,
          "name": "gm",
          "desc": 500
        },
        {
          "varientId": 4,
          "prodId": 4,
          "price": 400,
          "name": "kg",
          "desc": 1
        }
      ]
    },
    // {
    //   "prodId": 5,
    //   "category": "Spices",
    //   "name": "Coriander Seed Powder",
    //   "image": "assets/products/spices/z5.jpg",
    //   "price": 400,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 6,
    //   "category": "Spices",
    //   "name": "Cumin Powder",
    //   "image": "assets/products/spices/z6.jpg",
    //   "price": 100,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 7,
    //   "category": "Spices",
    //   "name": "coriander & Cumin Powder",
    //   "image": "assets/products/spices/z7.jpg",
    //   "price": 200,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 8,
    //   "category": "Spices",
    //   "name": "Kashmiri Chilli Powder",
    //   "image": "assets/products/spices/z8.jpg",
    //   "price": 300,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 9,
    //   "category": "Spices",
    //   "name": "Paprika Powder",
    //   "image": "assets/products/spices/z9.jpg",
    //   "price": 400,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 10,
    //   "category": "Spices",
    //   "name": "white Pepper Powder",
    //   "image": "assets/products/spices/z10.jpg",
    //   "price": 400,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 11,
    //   "category": "Spices",
    //   "name": "Dry Ginger Powder",
    //   "image": "assets/products/spices/z11.jpg",
    //   "price": 400,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 12,
    //   "category": "Spices",
    //   "name": "Fenugreek Powder",
    //   "image": "assets/products/spices/z12.jpg",
    //   "price": 400,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 13,
    //   "category": "Spices",
    //   "name": "Garam Masala Powder",
    //   "image": "assets/products/spices/z13.jpg",
    //   "price": 400,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 14,
    //   "category": "Spices",
    //   "name": "sambar Powder",
    //   "image": "assets/products/spices/z14.jpg",
    //   "price": 400,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 15,
    //   "category": "Spices",
    //   "name": "Idly Podi Masala",
    //   "image": "assets/products/spices/z15.jpg",
    //   "price": 400,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 16,
    //   "category": "Spices",
    //   "name": "chicken 65 Masala",
    //   "image": "assets/products/spices/z16.jpg",
    //   "price": 400,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 17,
    //   "category": "Spices",
    //   "name": "Mutton Masala",
    //   "image": "assets/products/spices/z17.jpg",
    //   "price": 400,
    //   "quantity": 1
    // },
    // {
    //   "prodId": 18,
    //   "category": "Spices",
    //   "name": "Fish Fry Masala",
    //   "image": "assets/products/spices/z18.jpg",
    //   "quantity": 1
    // },
    // {
    //   "prodId": 19,
    //   "category": "Spices",
    //   "name": "Briyani Masala",
    //   "image": "assets/products/spices/z19.jpg",
    //   "quantity": 1
    // },
    // {
    //   "prodId": 20,
    //   "category": "Spices",
    //   "name": "Briyani Masala",
    //   "image": "assets/products/spices/z20.jpg",
    //   "quantity": 1
    // }

    /* ============ */

    // {
    //   "prodId": 5,
    //   "categoryId": "2",
    //   "name": "White Urad Gota",
    //   "image": "https://baldhaexport.com/wp-content/uploads/2022/01/MASOOR-WHOLE.jpg",
    //   "quantity": 1,
    //   "varient": [
    //     {
    //       "varientId": 1,
    //       "prodId": 5,
    //       "price": 100,
    //       "name": "gm",
    //       "desc": 100
    //     },
    //     {
    //       "varientId": 2,
    //       "prodId": 5,
    //       "price": 200,
    //       "name": "gm",
    //       "desc": 250
    //     },
    //     {
    //       "varientId": 3,
    //       "prodId": 5,
    //       "price": 300,
    //       "name": "gm",
    //       "desc": 500
    //     },
    //     {
    //       "varientId": 4,
    //       "prodId": 5,
    //       "price": 400,
    //       "name": "kg",
    //       "desc": 1
    //     }
    //   ]
    // },
    // {
    //   "prodId": 6,
    //   "categoryId": "2",
    //   "name": "White Urid Dal",
    //   "image": "https://baldhaexport.com/wp-content/uploads/2022/01/MASOOR-WHOLE.jpg",
    //   "quantity": 1,
    //   "varient": [
    //     {
    //       "varientId": 1,
    //       "prodId": 6,
    //       "price": 100,
    //       "name": "gm",
    //       "desc": 100
    //     },
    //     {
    //       "varientId": 2,
    //       "prodId": 6,
    //       "price": 200,
    //       "name": "gm",
    //       "desc": 250
    //     },
    //     {
    //       "varientId": 3,
    //       "prodId": 6,
    //       "price": 300,
    //       "name": "gm",
    //       "desc": 500
    //     },
    //     {
    //       "varientId": 4,
    //       "prodId": 6,
    //       "price": 400,
    //       "name": "kg",
    //       "desc": 1
    //     }
    //   ]
    // },
    // {
    //   "prodId": 7,
    //   "categoryId": "2",
    //   "name": "White Vatana",
    //   "image": "https://baldhaexport.com/wp-content/uploads/2022/01/MASOOR-WHOLE.jpg",
    //   "quantity": 1,
    //   "varient": [
    //     {
    //       "varientId": 1,
    //       "prodId": 7,
    //       "price": 100,
    //       "name": "gm",
    //       "desc": 100
    //     },
    //     {
    //       "varientId": 2,
    //       "prodId": 7,
    //       "price": 200,
    //       "name": "gm",
    //       "desc": 250
    //     },
    //     {
    //       "varientId": 3,
    //       "prodId": 7,
    //       "price": 300,
    //       "name": "gm",
    //       "desc": 500
    //     },
    //     {
    //       "varientId": 4,
    //       "prodId": 7,
    //       "price": 400,
    //       "name": "kg",
    //       "desc": 1
    //     }
    //   ]
    // },
    // {
    //   "prodId": 8,
    //   "categoryId": "2",
    //   "name": "Yellow Moong Dal",
    //   "image": "https://baldhaexport.com/wp-content/uploads/2022/01/MASOOR-WHOLE.jpg",
    //   "quantity": 1,
    //   "varient": [
    //     {
    //       "varientId": 1,
    //       "prodId": 8,
    //       "price": 100,
    //       "name": "gm",
    //       "desc": 100
    //     },
    //     {
    //       "varientId": 2,
    //       "prodId": 8,
    //       "price": 200,
    //       "name": "gm",
    //       "desc": 250
    //     },
    //     {
    //       "varientId": 3,
    //       "prodId": 8,
    //       "price": 300,
    //       "name": "gm",
    //       "desc": 500
    //     },
    //     {
    //       "varientId": 4,
    //       "prodId": 8,
    //       "price": 400,
    //       "name": "kg",
    //       "desc": 1
    //     }
    //   ]
    // }
  ]

  /* === */

  itemVar = [
    {
      "varientId": 1,
      "prodId": 1,
      "price": 100,
      "name": "gm",
      "desc": 100
    },
    {
      "varientId": 2,
      "prodId": 1,
      "price": 200,
      "name": "gm",
      "desc": 250
    },
    {
      "varientId": 3,
      "prodId": 1,
      "price": 300,
      "name": "gm",
      "desc": 500
    },
    {
      "varientId": 4,
      "prodId": 1,
      "price": 400,
      "name": "kg",
      "desc": 1
    }
  ]

  /* =========
  ============== */

  category = [
    {
      "categoryId": 1,
      "name": "spices"
    },
    {
      "categoryId": 2,
      "name": "pulse & grains"
    },
    {
      "categoryId": 3,
      "name": "dry fruits"
    },
    {
      "categoryId": 4,
      "name": "namkeen & sweet"
    },
    {
      "categoryId": 5,
      "name": "flours"
    },
    {
      "categoryId": 6,
      "name": "rice"
    },
    {
      "categoryId": 7,
      "name": "religious products"
    },
    {
      "categoryId": 8,
      "name": "kitchen cutlery"
    },
    {
      "categoryId": 9,
      "name": "pickles, sauce & chutney"
    },
    {
      "categoryId": 10,
      "name": "bakery & biscuits"
    }
  ]


  cartNumber: number = 0;
  itemsCart: any = [];
  public products: any;
  token: any;
  // categoryName:any;
  // showActive = '';

  constructor(private api: ProductService, private cart: CartService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {

    //  this.api.getProductList().subscribe(res => {
    //     this.products = res;

    //     this.products.forEach((a: any) => {
    //       Object.assign(a,{ quantity: 1, total: a.price });
    //     });
    //     console.log(this.products);
    //   })

    this.getProductData();
    console.log(this.productData);

  }

  addtoCart(item: any) {
    this.cart.addtoCart(item);
  }


  getProductData() {
    // this.http.get('./assets/data/product.json').subscribe(res => {
    this.products = this.productData;

    if (!localStorage.getItem('role_id')) {
      this.route.navigate(['../login']);


    } else {

      this.token = localStorage.getItem('role_id');


      if (this.token == 1) {
        this.products.forEach((a: any) => {
          Object.assign(a, { quantity: 5, total: a.price });
        });
      } else {

        this.products.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
      }


    }




  }

  // showCategory(item: any) {
  //   console.log(item);
  //   this.showActive = item.find((cat:any)=>{
  //    return cat.name == item.name;
  //   })

  //   console.log(this.showActive)

  //   this.categoryName = item.name;

}

