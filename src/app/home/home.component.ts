import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',

  standalone: true,
  imports:[NgIf],
  template: `
    <p>
      THIS IS THE HOME PAGE .WELCOME !
    </p>

    <button (click)="fetchPost(2)">GetPost of ID=2</button>

    <h2>Fetched Post:</h2>
    <div *ngIf="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <p *ngIf="loading">Loading ..........</p>

    <p></p>
  `,
  styles: `

  p{
    color: Orange;
    font-size : 50px;
      font-style :italic;
      font-weight: bold;
  }
  `
})
export class HomeComponent implements OnInit{

  post:any;
 loading=true;

  constructor(private router:Router, private myService: MyServiceService){

  }
  ngOnInit(): void {

  }

fetchPost(postId:number){

 this.myService.getPostById(postId).subscribe((response)=>{this.post=response; this.loading=false;}, (error)=>{console.error('There was an error while fetching post data!', error);})
}



}
