import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Mobile', 'Tv', 'Head Phones', 'Laptop', 'Camera'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [50, 65, 60, 70, 46], label: 'Eloctronics' }
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Iphone'], ['Boat-Rugby'], 'Samsung'];
  public pieChartData: SingleDataSet = [200, 500, 200];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // public barChartColors: Color[] = [
  //   { backgroundColor: ['red','yellow','green','blue','pink'] },
   
  // ]

  ngOnInit() {
  }

}
