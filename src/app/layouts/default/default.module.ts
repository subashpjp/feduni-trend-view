import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule, MatTooltipModule
} from '@angular/material';
import {ApiComponent} from '../../modules/api/api.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiDialogComponent} from '../../modules/api/api-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ApiService} from '../../modules/api/api.service';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {ApiDetailsComponent} from '../../modules/api-details/api-details.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SectorComponent} from '../../modules/sector/sector.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ClarityModule} from '@clr/angular';
import {ApiDetailsService} from '../../modules/api-details/api-details.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ApiComponent,
    ApiDialogComponent,
    ApiDetailsComponent,
    SectorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatGridListModule,
    MatSnackBarModule,
    MatPaginatorModule,
    ClarityModule
  ],
  exports: [
    SharedModule
  ],
  providers: [ApiService, ApiDetailsService],
  entryComponents: [ApiComponent]
})
export class DefaultModule { }
