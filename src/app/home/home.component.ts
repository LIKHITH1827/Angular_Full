import { Component } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-home',

  standalone: true,
  template: `
    <p>
      THIS IS THE HOME PAGE .WELCOME !
    </p>
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
export class HomeComponent {

  
}
