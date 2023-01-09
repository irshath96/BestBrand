import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.http.get<any>("http://localhost:3000/userDetails")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && this.loginForm.value.password
        });
        if (user) {
          alert("Login Successfully ");
          this.loginForm.reset();
          this.route.navigate(['home']);
        }
        else {
          alert("User not found");
          this.route.navigate(['register']);
        }
      }, err => {
        alert("Something went wrong")
      })
  }

}
