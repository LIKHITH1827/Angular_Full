import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `
    <p>
     U R CURRENTLY IN PRODUCTS PAGE !
    </p>
  `,
  styles: `
  p{
    color: Tomato;
    font-size : 50px;
      font-style :italic;
      font-weight: bold;
  }
  `
})
export class ProductComponent {

}
