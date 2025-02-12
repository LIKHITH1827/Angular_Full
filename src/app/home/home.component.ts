import { Component,inject, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',

  standalone: true,
  imports:[NgIf,CommonModule],
  template: `
    <p>
      THIS IS THE HOME PAGE .WELCOME !
    </p>

    <button (click)="fetchPosts()">GetPosts</button>

    <ul *ngIf="posts.length > 0">
      <li *ngFor="let post of posts">
        <h1>{{post.title}}</h1>
          <p>{{post.body}}</p>
        </li>
    </ul>

    <div *ngIf="post">
      <h2>Post ID: {{ post.id }}</h2>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>

    <div *ngIf="!post">
      <h2>No Post Selected in url</h2>
      <p>Enter an ID in the URL to fetch a post.</p>
    </div>

    <p></p>
  `,
  styles: `

  p{
    color: Orange;
    font-size : 50px;
      font-style :italic;
      font-weight: bold;
  }
  button{
    cursor:pointer;
    background-color: blue;
    color: red;
  }
  `
})
export class HomeComponent implements OnInit{
 private route= inject(ActivatedRoute);
  posts:any[]=[];
  post: any =null;
 loading=true;

  constructor( private myService: MyServiceService){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const postId= params.get('id');
      if(postId){
        this.fetchPostsById(+postId);
      }
    })
  }

  fetchPosts(){
    this.myService.getPosts().subscribe(response=>{this.posts=response});
  }
  fetchPostsById(postId:number){
     this.myService.getPostById(postId).subscribe(response=>this.post=response);
  }
/*fetchPostById(postId:number){

 this.myService.getPostById(postId).subscribe((response)=>{this.post=response; this.loading=false;}, (error)=>{console.error('There was an error while fetching post data!', error);})
}*/



}
