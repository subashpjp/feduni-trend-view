import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = 'http://localhost:8080/api/v1/home';

  constructor(private http: HttpClient) {
  }

  save(value: any) {
    console.warn('from api service' + value.api);
    return this.http.post<string>(this.api, value);
  }
}
