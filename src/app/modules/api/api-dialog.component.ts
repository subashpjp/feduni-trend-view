import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from './api.service';
import {AllIndiaConsumerPriceIndexRuralUrbanDocument} from '../../SectorDto/AllIndiaConsumerPriceIndexRuralUrban/AllIndiaConsumerPriceIndexRuralUrbanDocument';
import {SectorDto} from '../../SectorDto/SectorDto';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';


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
              private snackBar: MatSnackBar,
              private router: Router) {
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
    this.router.navigate(['/api']);
    this.onClose();
    console.warn(this.apiModel.value);
    this.apiService.save(this.apiModel.value).subscribe((data: AllIndiaConsumerPriceIndexRuralUrbanDocument) => {
      this.snackBar.open('Data Saved Successfully', 'close', {
        duration: 3000,
      });
      this.router.navigate(['/api']);
    });
  }


}
