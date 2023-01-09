import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm ! : FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name : ['', Validators.required],
      mobile : ['', Validators.required],
      email : ['', Validators.required],
      password : ['',Validators.required]
    })
  }

  signup() {
    this.http.post<any>("http://localhost:3000/userDetails", this.registerForm.value)
    .subscribe(res => {
      alert ("Signup Successfull");
      this.registerForm.reset();
      this.route.navigate(['login']);
    })
  }

}
