import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiUrl = 'http://localhost:3000/userDetails'

  getAll(){
    return this.http.get(this.apiUrl);
  }

  getByUserId(id:any) {
    return this.http.get(this.apiUrl+'/'+id);
  }

  logedIn() {
    return sessionStorage.getItem('email')!=null;
  }




}
