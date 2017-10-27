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
        photos: "http://images.performgroup.com/di/library/GOAL/f8/c0/lionel-messi-barcelona_1jyd2rs27hmpp1v3t90snpvkbl.jpg?t=-283775795",
        serviceProvider: "service provider",
        action: "action"
      },
      {
        photos: "http://images.performgroup.com/di/library/GOAL/f8/c0/lionel-messi-barcelona_1jyd2rs27hmpp1v3t90snpvkbl.jpg?t=-283775795",
        serviceProvider: "service provider",
        action: "action"
      },
      {
        photos: "http://images.performgroup.com/di/library/GOAL/f8/c0/lionel-messi-barcelona_1jyd2rs27hmpp1v3t90snpvkbl.jpg?t=-283775795",
        serviceProvider: "service provider",
        action: "action"
      },
      {
        photos: "http://images.performgroup.com/di/library/GOAL/f8/c0/lionel-messi-barcelona_1jyd2rs27hmpp1v3t90snpvkbl.jpg?t=-283775795",
        serviceProvider: "service provider",
        action: "action"
      },
      {
        photos: "http://images.performgroup.com/di/library/GOAL/f8/c0/lionel-messi-barcelona_1jyd2rs27hmpp1v3t90snpvkbl.jpg?t=-283775795",
        serviceProvider: "service provider",
        action: "action"
      },
      {
        photos: "http://images.performgroup.com/di/library/GOAL/f8/c0/lionel-messi-barcelona_1jyd2rs27hmpp1v3t90snpvkbl.jpg?t=-283775795",
        serviceProvider: "service provider",
        action: "action"
      },
    ];
  }

  ngOnInit() {
  }

}
