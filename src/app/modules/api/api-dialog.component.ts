import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from './api.service';

@Component({
  selector: 'app-api-dialog',
  templateUrl: './api-dialog.component.html',
  styleUrls: ['./api-dialog.component.css']
})
export class ApiDialogComponent implements OnInit {
  apiModel: FormGroup;

  constructor(public dialogRef: MatDialogRef<ApiDialogComponent>,
              private fb: FormBuilder,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiModel = this.fb.group({
      api: ['', Validators.required]
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {
    // console.warn(this.apiModel.value);
    this.onClose();
    this.apiService.save(this.apiModel.value).subscribe(result => console.log('data from backed' + result));
  }


}
