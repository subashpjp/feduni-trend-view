import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  openSideBar = true;

  constructor() {

  }

  ngOnInit() {
  }

  sidebarToggler($event: any) {
    this.openSideBar = !this.openSideBar;
  }
}
