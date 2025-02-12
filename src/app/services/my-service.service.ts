import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private url="https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getGreeting(){
    return "This is returned from my-service. How are u?"
  }


   getPosts(): Observable<any>{
      return this.http.get(this.url);
   }


  getPostById(postId:number) : Observable<any>{
    return this.http.get(`${this.url}/${postId}`);
  }
}
