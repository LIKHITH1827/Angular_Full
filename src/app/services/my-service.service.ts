import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  getGreeting(){
    return "This is returned from my-service. How are u?"
  }

  getPostById(postId:any) : Observable<any>{
   const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
   return this.http.get(url);
  }
}
