import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',

  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 @Input() users: string[]=[];

 //declare  an emitter to send data to parent component
 @Output() userClicked= new EventEmitter<string>();


 //method to emit the selected user
 onUserClick(user:string){
  this.userClicked.emit(user);
 }

}
