import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { Chart2Service } from '../chart2/chart2.service';
Chart.register(...registerables);

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent {
  constructor(private service: Chart2Service) {}
  simpandata: any = [];
  title2: any = [];
  title1: any = [];
  rating: any = [];

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
          this.rating.push(elem.rating);
        }
      }
      console.log(this.title2);
      new Chart('piechart', {
        type: 'pie',
        data: {
          labels: this.title2,
          datasets: [
            {
              label: 'Rating',
              data: this.rating,
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
