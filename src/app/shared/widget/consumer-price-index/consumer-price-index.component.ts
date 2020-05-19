import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-consumer-price-index',
  templateUrl: './consumer-price-index.component.html',
  styleUrls: ['./consumer-price-index.component.css']
})
export class ConsumerPriceIndexComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'column',
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10,
        // Explicitly tell the width and height of a chart
        width: 1200,
        height: 600
      },
      title: {
        text: 'Price Index All India'
      },
      xAxis: {
        categories: ['Cereals and products', 'meat_and_fish', 'egg',
          'milk_and_products', 'oils_and_fats', 'fruits', 'vegetables',
          'pulses_and_products', 'sugar_and_confectionery',
          'spices', 'non_alcoholic_beverages', 'clothing', 'housing', 'transport_and_communication']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Price Index'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: ( // theme
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color
            ) || 'gray'
          }
        }
      },
      legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        name: 'Rural',
        data: [107.5, 106.3, 108.1, 104.9, 106.1, 103.9, 101.9, 104.8, 106.7, 105.5, 105.1, 104.8, 105.1, 107.2]
      }, {
        name: 'Urban',
        data: [107.5, 106.3, 108.1, 104.9, 106.1, 103.9, 101.9, 104.8, 106.7, 105.5, 105.1, 104.8, 105.1, 107.2]
      }, {
        name: 'Rural + Urban',
        data: [107.5, 106.3, 108.1, 104.9, 106.1, 103.9, 101.9, 104.8, 106.7, 105.5, 105.1, 104.8, 105.1, 107.2]
      },
      ]
    };
  }

}
