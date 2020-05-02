import {ChangeDetectorRef, Component, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiDialogComponent} from './api-dialog.component';
import {ApiService} from './api.service';
import {AllIndaCustomerPriceIndexPage} from '../../SectorDto/AllIndiaCustomerPricePage/AllIndaCustomerPriceIndexPage';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  apiForm: FormGroup;
  pageData: AllIndaCustomerPriceIndexPage;


  constructor(private dialog: MatDialog,
              private apiService: ApiService,
              private cdf: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.apiService.fetchBySector('all-india-consumer-price-index')
      .subscribe(
        (data: AllIndaCustomerPriceIndexPage) => {
          this.pageData = data;
          console.log(this.pageData.data[0].title);
        }, error => console.log(error));
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(ApiDialogComponent, dialogConfig);
  }
}
