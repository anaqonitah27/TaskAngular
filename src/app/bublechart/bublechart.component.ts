import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { Chart2Service } from '../chart2/chart2.service';
Chart.register(...registerables);

@Component({
  selector: 'app-bublechart',
  templateUrl: './bublechart.component.html',
  styleUrls: ['./bublechart.component.scss'],
})
export class BublechartComponent {
  constructor(private service: Chart2Service) {}
  simpandata: any = [];
  title2: any = [];
  title1: any = [];
  discountPercentage: any = [];

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
          this.discountPercentage.push(elem.discountPercentage);
        }
      }
      console.log(this.discountPercentage);
      new Chart('bublechart', {
        type: 'bubble',
        data: {
          labels: this.discountPercentage,
          datasets: [
            {
              label: 'Discount',
              data: this.discountPercentage,
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
