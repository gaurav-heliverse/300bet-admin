import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl;

  constructor(private http : HttpClient, private router : Router) { }

  login(modal : any){
    return this.http.post(this.url+'auth/admin-login', modal).pipe(
      map((user : any) =>{
        console.log("Login user is : ", user)
        localStorage.setItem('token',  user["token"].toString());
         localStorage.setItem('id',  user["data"].id.toString());
        return user;
      })
    )

    this.router.navigateByUrl('dashboard/games')
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('judgename');
    this.router.navigate(['/login']);
}
}
