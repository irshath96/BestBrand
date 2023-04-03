import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  userData: any;
  user: any;
  showLogin = false;

  constructor(private fb: FormBuilder, private http: HttpClient,
    private route: Router, private auth: AuthService) {

    sessionStorage.clear();

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  openLogin(){
    this.showLogin = true;
  }

  openLogout(){
    this.showLogin = false;
  }

  // login() {
  //    this.http.get<any>("http://localhost:3000/userDetails")
  //   // this.http.get<any>("/assets/data/user.json")
  //         .subscribe(res => {
  //       const user = res.find((a: any) => {
  //         return a.email === this.loginForm.value.email && this.loginForm.value.password
  //       });
  //       if (user) {
  //         alert("Login Successfully ");
  //         this.loginForm.reset();
  //         this.route.navigate(['home']);
  //       }
  //       else {
  //         alert("User not found");
  //         this.route.navigate(['register']);
  //       }
  //     }, err => {
  //       alert("Something went wrong")
  //     })
  // }

  userDetails = [
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
    },
    {
      "firstName": "Mohamed",
      "lastName": "siraj",
      "city": "1",
      "country": "1",
      "address1": "qw",
      "address2": "we",
      "address3": "as",
      "address4": "sd",
      "email": "siraj@gmail.com",
      "number": 9876541230,
      "password": "siraj",
      "role": "admin",
      "isActive": true,
      "id": 2,
      "role_id": 1
    }
  ]

  login() {
     this.user = this.userDetails.find((a: any) => {
      return a.email === this.loginForm.value.email && this.loginForm.value.password
    });
    if (this.user) {
     // console.log(this.user);
      alert("Login Successfully ");
      localStorage.setItem('role_id',this.user.role_id);
      this.loginForm.reset();
      this.route.navigate(['cart']);
    }
    else {
    //  console.log(this.user);
      alert("User not found");
      this.route.navigate(['register']);
    }

  }






  // login() {
  //   if (this.loginForm.valid) {
  //     this.auth.getByUserId(this.loginForm.value.username).subscribe(res => {
  //       this.userData = res;
  //       console.log(this.userData);
  //       if (this.userData.password === this.loginForm.value.password) {
  //         if (this.userData.isactive) {
  //           sessionStorage.setItem('username', this.userData.id);
  //           sessionStorage.setItem('userrole', this.userData.role);
  //           alert("Login Successfully ");
  //           this.route.navigate(['home']);

  //         } else {
  //           alert("Please Contact admin , In active user");
  //         }
  //       } else {
  //         alert("Invalid Credentials")
  //       }
  //     });


  //   }
  //   else {
  //     alert('please enter valid data');
  //   }

  // }


}
