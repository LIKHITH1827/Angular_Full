import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { MyServiceService } from './services/my-service.service';

@Component({
  selector: 'app-root',
  standalone: false,

  template: `
    <h1>Welcome to {{title}}!</h1>
    <!-- Passing userList to UserComponent -->
    <app-user [users]="userList" (userClicked)="handleUserClick($event)">
   <p  myattri #projectedContent>This is <strong>projected </strong>from parent</p>

  </app-user>

    <button (click)="userListChange()">onchanges</button>

    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/product">Product</a>
     </nav>

     <p id="myserviceid" >Check this service mesg {{messagefromservice}}</p>

    <p> the selected user from child is <span id="userselected">{{selecteduser}}</span></p>
    <button (click)="ToggleText()">Submit</button>
    <p *ngIf="toggleflag" id="toggle-text"> Here is toggled text </p>


<router-outlet></router-outlet>

  `,
  styles: [
    `
    h1 {
      color: blue;
    }
    p {
      color: black;
      font-size : 16px;

    }
    #myserviceid{
      color: green;
    }

      button{
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      button:hover{
        background-color : purple;
      }

     #toggle-text{
      color:green;
     }
     #userselected{
      color: brown;

      font-size : 20px;
      font-style :italic;
      font-weight: bold;
     }

     nav {
      font-size: 35px;
      color: DodgerBlue;
      text-decoration : underline;
  display: flex;
  gap: 10px; /* Adds space between the anchor tags */
}

nav a {
  text-decoration: none;
}

    `
  ],
})
export class AppComponent {
  title = 'appcomponent';
  messagefromservice:string='';
  userList:string[]=['Likhith','Manoghna','Jay','kittu'];
  selecteduser:string='';
  constructor(private myserviceService: MyServiceService){

  }
  ngOnInit():void{
    this.messagefromservice=this.myserviceService.getGreeting();

  }

  toggleflag=false;
  ToggleText(){
    this.toggleflag=!this.toggleflag;
  }

  //Handler to receive the selected user from the child
  handleUserClick(user:string){
   this.selecteduser=user;
  }


  userListChange():void{
    this.userList= ['python','java'];
  }
}
