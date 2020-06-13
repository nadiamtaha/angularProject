import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 

   //di-->dependecncy injection
   
  
  constructor(public _HttpClient:HttpClient) 
  {
       _HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=c636ed7787cc302d96bf88ccf334e0d8")
  }

  getTrendingMovies():Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=c636ed7787cc302d96bf88ccf334e0d8")
  }

}
