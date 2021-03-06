import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {MatButtonModule, MatDividerModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import { AreaComponent } from './widget/area/area.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { ConsumerPriceIndexComponent } from './widget/consumer-price-index/consumer-price-index.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    ConsumerPriceIndexComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    ConsumerPriceIndexComponent
  ]
})
export class SharedModule {
}
