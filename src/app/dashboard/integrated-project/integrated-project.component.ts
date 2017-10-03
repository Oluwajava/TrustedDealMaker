import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrated-project',
  templateUrl: './integrated-project.component.html',
  styleUrls: ['./integrated-project.component.css']
})
export class IntegratedProjectComponent implements OnInit {

  searchData: boolean;
  settings: any;
  data: any;

  constructor() {
    this.settings = {
      attr: {
        class: 'datatable'
      },
      actions: {
        add: false,
        edit: false,
        delete: false
      },
      columns: {
        photos: {
          title: 'Photos'
        },
        serviceProvider: {
          title: 'Service Provider'
        },
        action: {
          title: 'Action'
        }
      }
    }
    ;

    this.data = [
      {
        photos: "phtoto",
        serviceProvider: "service provider",
        action: "action"
      },
      {
        photos: "phtoto",
        serviceProvider: "service provider",
        action: "action"
      },
      {
        photos: "phtoto",
        serviceProvider: "service provider",
        action: "action"
      },
      {
        photos: "phtoto",
        serviceProvider: "service provider",
        action: "action"
      },
      {
        photos: "phtoto",
        serviceProvider: "service provider",
        action: "action"
      },
      {
        photos: "phtoto",
        serviceProvider: "service provider",
        action: "action"
      },
    ];
  }

  ngOnInit() {
  }

}
