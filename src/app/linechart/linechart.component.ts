import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { Chart2Service } from '../chart2/chart2.service';
Chart.register(...registerables);

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
})
export class LinechartComponent {
  constructor(private service: Chart2Service) {}
  simpandata: any = [];
  title2: any = [];
  title1: any = [];
  price: any = [];

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.simpandata.push(data);
      for (let elem of this.simpandata) {
        if (elem.products) {
          this.title1.push(elem.products);
        }
      }
      console.log(this.title1[0]);

      for (let elem of this.title1[0]) {
        if (elem.title) {
          this.title2.push(elem.title);
        }
        if (elem.stock) {
          this.price.push(elem.price);
        }
      }
      console.log(this.price);
      new Chart('linechart', {
        type: 'line',
        data: {
          labels: this.title2,
          datasets: [
            {
              label: 'Price',
              data: this.price,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
  }
}

