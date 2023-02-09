import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { Chart2Service } from '../chart2/chart2.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss'],
})
export class Chart2Component {
  constructor(private service: Chart2Service) {}
  simpandata: any = [];
  title2: any = [];
  title1: any = [];
  stock: any = [];

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
          this.stock.push(elem.stock);
        }
      }
      console.log(this.stock);
      new Chart('doughnutchart', {
        type: 'doughnut',
        data: {
          labels: this.title2,
          datasets: [
            {
              label: 'Stock',
              data: this.stock,
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
