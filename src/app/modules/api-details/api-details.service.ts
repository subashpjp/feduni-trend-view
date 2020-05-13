import {Injectable} from '@angular/core';
import {BaseurlService} from '../../baseurl.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDetailsService {

  constructor(private baseUrl: BaseurlService,
              private httpClient: HttpClient) {
  }

  findOneById(sector: string, id: string) {
    return this.httpClient.get(this.baseUrl.baseUrl
      + '/'
      + sector
      + '/get'
      + '/'
      + id);
  }
}
