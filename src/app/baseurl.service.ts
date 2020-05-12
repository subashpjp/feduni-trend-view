import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseurlService {
  baseUrl = 'http://localhost:8080/api';

  constructor() { }
  getBaseUrl(): string {
    return this.baseUrl;
  }
  getAllSectorUrl(): string {
    return this.baseUrl + '/sector/all';
  }
}
