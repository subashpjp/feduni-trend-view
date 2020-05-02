import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  allIndiaConsumerPriceIndex = 'all-india-consumer-price-index';
  api = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  save(value: any) {
    console.warn('from api service' + value.api);
    return this.http.post(this.api, value);
  }

  fetchBySector(sector: string) {
    if (sector === this.allIndiaConsumerPriceIndex) {
      return this.http.get(this.api + sector + '/page');
    }

  }
}
