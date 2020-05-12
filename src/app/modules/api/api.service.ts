import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BaseurlService} from '../../baseurl.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // allIndiaConsumerPriceIndex = 'all-india-consumer-price-index';


  constructor(private http: HttpClient, private baseurlService: BaseurlService) {
  }

  save(value: any) {
    console.log('url ::' + this.baseurlService.baseUrl + '/' + value.sector + '/add');
    console.log(value);
    return this.http.post(this.baseurlService.baseUrl + '/' + value.sector + '/add', value);
  }

  // fetchBySector(sector: string) {
  //   if (sector === this.allIndiaConsumerPriceIndex) {
  //     return this.http.get(this.api + sector + '/page');
  //   }
  //
  // }

  getAllSector() {
    console.log('get all sectr');
    console.log(this.baseurlService.getAllSectorUrl());

    return this.http.get(this.baseurlService.getAllSectorUrl());
  }


  fetchPageofDateBySector(sectorValue: string) {
    return this.http.get(this.baseurlService.baseUrl + '/' + sectorValue + '/page');
  }
}
