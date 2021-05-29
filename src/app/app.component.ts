import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin';
  login_route : boolean = false

  ngOnInit(){
    if(window.location.pathname === '/login'){
      this.login_route = true
    }
  }
}
