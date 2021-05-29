import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router) { 

  }

  ngOnInit(): void {
    if(window.location.href === '/dashboard'){
      console.log("Location ",window.location.href)
      this.router.navigate(['dashboard/games'])
    }
  }

}
