import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {AuthService} from './../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : any
  passVisible : boolean = false
  constructor(private _fb : FormBuilder, private authService : AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    })
  }

  onSubmit(){
    console.log('Login credentail : ',this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(res =>{
      if(res.status === 200){
        console.log("after login data : ", res);
        console.log(this.router.navigateByUrl('/dashboard/games'))
        // this.router.navigateByUrl('/dashboard/games')
      }
    })
  }

  showPassword(pass : any){
    this.passVisible = true
    console.log(pass, pass.type)
    pass.type = "text"
  }

  hidePassword(pass : any){
    this.passVisible = false
    console.log(pass, pass.type)
    pass.type = "password"
  }

}
