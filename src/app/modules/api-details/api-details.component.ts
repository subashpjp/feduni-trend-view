import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BaseurlService} from '../../baseurl.service';
import {ApiDetailsService} from './api-details.service';
import {OneResponse} from '../../SectorDto/pageResponse/OneResponse';

@Component({
  selector: 'app-api-details',
  templateUrl: './api-details.component.html',
  styleUrls: ['./api-details.component.css']
})
export class ApiDetailsComponent implements OnInit {
  id: string;
  sector: string;
  oneResponse: OneResponse;
  object = Object;
  spinner = true;

  constructor(private activeRoute: ActivatedRoute,
              private detailsService: ApiDetailsService) {
  }

  ngOnInit(): void {
    this.activateRoute();
    this.findOneById();
  }


  activateRoute() {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.sector = params.get('sector');
      // console.log('id ' + this.id);
      // console.log('id ' + this.id);
    });
  }

  findOneById() {
    this.detailsService.findOneById(this.sector, this.id).subscribe(
      (result: OneResponse) => {
        this.oneResponse = result;
        console.log(result);
        this.showSpinner();

        // for (let i = 0; i < this.oneResponse.records.length; i++) {
        //   for (let key of Object.keys(this.oneResponse.records[i])) {
        //     // console.log(this.oneResponse.records[i][key]);
        //   }
        // }
      }
  )
    ;
  }

  showSpinner() {
    this.spinner = !this.spinner;
  }


}
