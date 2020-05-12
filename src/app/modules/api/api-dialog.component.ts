import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from './api.service';
import {AllIndiaConsumerPriceIndexRuralUrbanDocument} from '../../SectorDto/AllIndiaConsumerPriceIndexRuralUrban/AllIndiaConsumerPriceIndexRuralUrbanDocument';
import {SectorDto} from '../../SectorDto/SectorDto';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-api-dialog',
  templateUrl: './api-dialog.component.html',
  styleUrls: ['./api-dialog.component.css']
})
export class ApiDialogComponent implements OnInit {
  apiModel: FormGroup;
  sector: SectorDto[];

  constructor(public dialogRef: MatDialogRef<ApiDialogComponent>,
              private fb: FormBuilder,
              private apiService: ApiService,
              private snackBar: MatSnackBar) {
    this.apiService.getAllSector().subscribe(
      (data: SectorDto[]) => {
        this.sector = data;
      }
    );
  }

  ngOnInit(): void {
    this.apiModel = this.fb.group({
      url: ['', Validators.required],
      sector: ['', Validators.required]
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {
    // console.warn(this.apiModel.value);
    this.onClose();
    this.apiService.save(this.apiModel.value).subscribe((data: AllIndiaConsumerPriceIndexRuralUrbanDocument) =>
      console.log(data));
    this.snackBar.open('Data Saved Successfully', 'close', {
      duration: 2000,
    });
  }


}
