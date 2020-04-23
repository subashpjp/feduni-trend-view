import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
  }

  addApi(value) {
    console.log('I am from service ' + value.api);

  }
}
