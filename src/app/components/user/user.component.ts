import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges,AfterContentInit, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-user',

  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnChanges,AfterContentInit{

 @Input() users!: string[];

 //declare  an emitter to send data to parent component
 @Output() userClicked= new EventEmitter<string>();

 ngOnChanges(changes: SimpleChanges): void {
  console.log("previous value of users", changes['users']?.previousValue);
  console.log("current value of users", changes['users']?.currentValue );

 }
 //method to emit the selected user
 onUserClick(user:string){
  this.userClicked.emit(user);
 }
 @ContentChild('projectedContent') paragraph!:ElementRef;

ngAfterContentInit(): void {
  console.log('projected content',this.paragraph.nativeElement.innerText);
this.paragraph.nativeElement.style.color='pink';
}
}
