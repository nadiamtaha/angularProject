import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(_Router:Router) { 
      //  var token = localStorage.getItem('token');
      //  if(token==null)
      //     _Router.navigateByUrl("/signin")
  }

  ngOnInit(): void {
  }

}
