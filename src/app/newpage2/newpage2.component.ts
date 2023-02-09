import { Component, OnInit } from '@angular/core';
import { Chart, registerables, TimeScale } from 'node_modules/chart.js';
import { ServiceService } from '../service/service.service';
Chart.register(...registerables);

@Component({
  selector: 'app-newpage2',
  templateUrl: './newpage2.component.html',
  styleUrls: ['./newpage2.component.scss'],
})
export class Newpage2Component implements OnInit {
  constructor(private service: ServiceService) {}
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
        if (elem.description) {
          this.title2.push(elem.description);
        }
        if(elem.price){
          this.price.push(elem.price);
        }
      }
      console.log(this.title2);
      new Chart('piechart', {
        type: 'bar',
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
