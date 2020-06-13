import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _Router:Router) {
   
   }

  ngOnInit(): void {
  }

}
