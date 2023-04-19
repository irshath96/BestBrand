import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      address3: ['', Validators.required],
      address4: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      password: ['', Validators.required],
      role: [''],
      isActive: [false]
    })
  }

  register() {
    this.http.post<any>("http://localhost:3000/userDetails", this.registerForm).
      subscribe(res => {
        alert("Register Successfully");
        // localStorage.setItem('userDetails', this.registerForm);
        this.registerForm.reset();
        this.route.navigate(['login']);
      })
  }

  getPlaceId(event:any){

  }

  // ================================= //

  country = [
    {
      'countryId': 1,
      'name': 'USA',
      'city' : [
        {
          'countryId' : 1,
          'cityId' : 1,
          'name' : 'Washinton'
        },
        {
          'countryId' : 1,
          'cityId' : 2,
          'name' : 'Texas'
        }
      ]
    },
    {
      'countryId': 2,
      'name': 'INDIA',
      'city' : [
        {
          'countryId' : 2,
          'cityId' : 1,
          'name' : 'Tamil Nadu'
        },
        {
          'countryId' : 2,
          'cityId' : 2,
          'name' : 'Kerala'
        }
      ]
    },
    {
      'countryId': 3,
      'name': 'UAE',
      'city' : [
        {
          'countryId' : 3,
          'cityId' : 1,
          'name' : 'Abudhabi'
        },
        {
          'countryId' : 3,
          'cityId' : 2,
          'name' : 'Sharja'
        }
      ]
    }
  ]

  'city' : [
    {
      'countryId' : 1,
      'cityId' : 1,
      'name' : 'Washinton'
    },
    {
      'countryId' : 1,
      'cityId' : 2,
      'name' : 'Texas'
    }
  ]

}
