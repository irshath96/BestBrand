import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products: any;
  token: any;


  constructor(private route: Router, private cart: CartService) { }

  ngOnInit(): void {

    this.getProducts();
  }


  addtoCart(item: any) {
    this.cart.addtoCart(item);
  }

  getProducts() {
    this.products = this.productList;

    if (!localStorage.getItem('role_id')) {
      this.route.navigate(['login']);
    }
    else {
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






  // ============================================================ //

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


  productList = [
    {
      "productId": 1,
      "name": "Chilli Powder",
      "image": "assets/products/spices/z1.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 1,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 1,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 1,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 1,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 2,
      "name": "Turmeric Powder",
      "image": "assets/products/spices/z2.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 2,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 2,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 2,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 2,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 3,
      "name": "Cumin Powder",
      "image": "assets/products/spices/z3.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 3,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 3,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 3,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 3,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 4,
      "name": "Pepper Rasam Powder",
      "image": "assets/products/spices/z4.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 4,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 4,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 4,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 4,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 5,
      "name": "Fish Fry Masala",
      "image": "assets/products/spices/z5.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 5,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 5,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 5,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 5,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 6,
      "name": "Mutton Masala",
      "image": "assets/products/spices/z6.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 6,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 6,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 6,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 6,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 7,
      "name": "Idly Podi Masala",
      "image": "assets/products/spices/z7.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 7,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 7,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 7,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 7,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 8,
      "name": "Sambar Powder",
      "image": "assets/products/spices/z8.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 8,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 8,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 8,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 8,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 9,
      "name": "Chicken 65 Masala",
      "image": "assets/products/spices/z9.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 9,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 9,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 9,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 9,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 10,
      "name": "Garam Masala Powder",
      "image": "assets/products/spices/z10.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 10,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 10,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 10,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 10,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 11,
      "name": "Fenugreen Powder",
      "image": "assets/products/spices/z11.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 11,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 11,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 11,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 11,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 12,
      "name": "Garlic Powder",
      "image": "assets/products/spices/z12.png",
      "quantity": 1,
      "categoryId": 1,
      "variant": [
        {
          "variantId": 1,
          "productId": 12,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 12,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 12,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 12,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 13,
      "name": "Coconut Flours",
      "image": "assets/products/flours/Coconut Flour.jpeg",
      "quantity": 1,
      "categoryId": 5,
      "variant": [
        {
          "variantId": 1,
          "productId": 13,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 13,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 13,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 13,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 14,
      "name": "Gram Flour",
      "image": "assets/products/flours/Gram Flour.jpg",
      "quantity": 1,
      "categoryId": 5,
      "variant": [
        {
          "variantId": 1,
          "productId": 14,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 14,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 14,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 14,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 15,
      "name": "Maize Flour",
      "image": "assets/products/flours/Maize Flour.jpg",
      "quantity": 1,
      "categoryId": 5,
      "variant": [
        {
          "variantId": 1,
          "productId": 15,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 15,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 15,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 15,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 16,
      "name": "Pea Flour",
      "image": "assets/products/flours/Pea Flour.jpg",
      "quantity": 1,
      "categoryId": 5,
      "variant": [
        {
          "variantId": 1,
          "productId": 16,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 16,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 16,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 16,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 17,
      "name": "Peanut Flour",
      "image": "assets/products/flours/Peanut Flour.jpg",
      "quantity": 1,
      "categoryId": 5,
      "variant": [
        {
          "variantId": 1,
          "productId": 17,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 17,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 17,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 17,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 18,
      "name": "Rice Flour",
      "image": "assets/products/flours/Rice Flour.jpg",
      "quantity": 1,
      "categoryId": 5,
      "variant": [
        {
          "variantId": 1,
          "productId": 18,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 18,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 18,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 18,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 19,
      "name": "Wheet Flour",
      "image": "assets/products/flours/Wheat Flour.jpeg",
      "quantity": 1,
      "categoryId": 5,
      "variant": [
        {
          "variantId": 1,
          "productId": 19,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 19,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 19,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 19,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 20,
      "name": "Black Bean",
      "image": "assets/products/pulse/Black Bean.jpg",
      "quantity": 1,
      "categoryId": 2,
      "variant": [
        {
          "variantId": 1,
          "productId": 20,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 20,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 20,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 20,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 21,
      "name": "Dried Beans",
      "image": "assets/products/pulse/Dried Beans.jpeg",
      "quantity": 1,
      "categoryId": 2,
      "variant": [
        {
          "variantId": 1,
          "productId": 21,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 21,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 21,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 21,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 22,
      "name": "Lobia",
      "image": "assets/products/pulse/Lobia.jpg", 
      "quantity": 1,
      "categoryId": 2,
      "variant": [
        {
          "variantId": 1,
          "productId": 22,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 22,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 22,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 22,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 23,
      "name": "Mix Daal",
      "image": "assets/products/pulse/Mix Dal.jpg",
      "quantity": 1,
      "categoryId": 2,
      "variant": [
        {
          "variantId": 1,
          "productId": 23,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 23,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 23,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 23,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 24,
      "name": "Soy Beans",
      "image": "assets/products/pulse/Soy Bean.jpg",
      "quantity": 1,
      "categoryId": 2,
      "variant": [
        {
          "variantId": 1,
          "productId": 24,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 24,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 24,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 24,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 25,
      "name": "Toor Dal",
      "image": "assets/products/pulse/Toor Dal.jpg",
      "quantity": 1,
      "categoryId": 2,
      "variant": [
        {
          "variantId": 1,
          "productId": 25,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 25,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 25,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 25,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
    {
      "productId": 26,
      "name": "Pinto Bean",
      "image": "assets/products/pulse/Pinto Bean.jpg",
      "quantity": 1,
      "categoryId": 5,
      "variant": [
        {
          "variantId": 1,
          "productId": 26,
          "price": 100,
          "weight": "gm",
          "desc": 100
        },
        {
          "variantId": 2,
          "productId": 26,
          "price": 200,
          "weight": "gm",
          "desc": 250
        },
        {
          "variantId": 3,
          "productId": 26,
          "price": 300,
          "weight": "gm",
          "desc": 500
        },
        {
          "variantId": 4,
          "productId": 26,
          "price": 400,
          "weight": "kg",
          "desc": 1
        }
      ]
    },
  ]



  // ====================================================== //


  prodVariant = [
    {
      "variantId": 1,
      "price": 100,
      "weight": "gm",
      "desc": 100
    },
    {
      "variantId": 1,
      "price": 200,
      "weight": "gm",
      "desc": 250
    },
    {
      "variantId": 1,
      "price": 300,
      "weight": "gm",
      "desc": 500
    },
    {
      "variantId": 1,
      "price": 400,
      "weight": "kg",
      "desc": 1
    }
  ]








}






