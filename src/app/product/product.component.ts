import { Component,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';


@Component({
  selector: 'app-product',
  standalone: false,

  template: `
    <p>
     U R CURRENTLY IN PRODUCTS PAGE !
    </p>
    <canvas #chartCanvas></canvas>

  `,
  styleUrl: `./product.component.scss`
})

export class ProductComponent implements AfterViewInit{
  @ViewChild('chartCanvas') chartElement!: ElementRef;

  ngAfterViewInit(): void {
    Chart.register(...registerables); // Register required modules

    new Chart(this.chartElement.nativeElement, {
      type: 'line', // Change to 'line', 'pie', 'doughnut' if needed
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Sales',
          data: [40, 55, 75, 90, 120],
          backgroundColor: ['red', 'blue', 'green', 'purple', 'orange']
        }]
      },
      options: {
        responsive: true
      }
    });
  }

}
