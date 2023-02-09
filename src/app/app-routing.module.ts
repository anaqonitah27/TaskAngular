import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BublechartComponent } from './bublechart/bublechart.component';
import { Chart2Component } from './chart2/chart2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinechartComponent } from './linechart/linechart.component';
import { NewpageComponent } from './newpage/newpage.component';
import { Newpage2Component } from './newpage2/newpage2.component';
import { PiechartComponent } from './piechart/piechart.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'newpage',
    component: NewpageComponent,
  },
  {
    path: 'newpage2',
    component: Newpage2Component,
  },
  {
    path: 'chart2',
    component: Chart2Component,
  },
  {
    path: 'piechart',
    component: PiechartComponent,
  },
  {
    path: 'bublechart',
    component: BublechartComponent,
  },
  {
    path: 'linechart',
    component: LinechartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [DashboardComponent, NewpageComponent, Newpage2Component];
