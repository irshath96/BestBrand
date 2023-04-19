import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  user: any;
  showLogin = false;


  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  login() {
    if (this.loginForm.valid) {
      this.user = this.userDetails.find((mail: any) => {
        return mail.email === this.loginForm.value.email && this.loginForm.value.password
      });
      if (this.user) {
        alert('Login Successfull');
        localStorage.setItem('role_id', this.user.role_id);
        this.loginForm.reset();
        this.route.navigate(['home']);
      }
      else {
        alert('user not found');
        this.route.navigate(['register']);
      }
    }
  }

  openLogin() {
    this.showLogin = true;
  }

  openLogout() {
    this.showLogin = false;
  }


  // ==================================== //

  userDetails = [
    {
      "firstName": "Noorul",
      "lastName": "Siraj",
      "city": "1",
      "country": "1",
      "address1": "qw",
      "address2": "we",
      "address3": "as",
      "address4": "sd",
      "email": "siraj@gmail.com",
      "number": 9876543210,
      "password": "siraj",
      "role": "admin",
      "isActive": true,
      "id": 1,
      "role_id": 1
    },
    {
      "firstName": "Mohamed",
      "lastName": "Irshath",
      "city": "1",
      "country": "1",
      "address1": "qw",
      "address2": "we",
      "address3": "as",
      "address4": "sd",
      "email": "irshath@gmail.com",
      "number": 9876543210,
      "password": "irshath",
      "role": "user",
      "isActive": true,
      "id": 1,
      "role_id": 2
    }
  ]


}
