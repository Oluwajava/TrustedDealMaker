import { Component, OnInit } from '@angular/core';
import {ApplicationRepository} from "../../core-module/service/repository/application-repository";
import {Constants} from "../../core-module/constants-utils";

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public _services: any;


  constructor(private applicationRepository: ApplicationRepository) {

    this.applicationRepository.query({destination: Constants.SERVICES}, callback => {
      this.services = callback;
    });
  }

  ngOnInit() {
  }

  set services(value: any) {
    this._services = value;
  }


}
