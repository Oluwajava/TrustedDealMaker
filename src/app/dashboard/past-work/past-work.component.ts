import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-past-work',
  templateUrl: './past-work.component.html',
  styleUrls: ['./past-work.component.css']
})
export class PastWorkComponent implements OnInit {

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
        date: {
          title: 'Date Posted'
        },
        service: {
          title: 'Service'
        },
        serviceProvider: {
          title: 'Service Provider Name'
        },
        offer: {
          title: 'Offer'
        },
        deadline: {
          title: 'Deadline'
        },
        milestones: {
          title: 'No. of Milestones'
        }
      }
    }
    ;

    this.data = [
      {
        date: "Date",
        service: "Services",
        serviceProvider: "Service Provider",
        offer: "Offer",
        deadline: "Deadline",
        milestones: "MIlestoens",
      },
      {
        date: "Date",
        service: "Services",
        serviceProvider: "Service Provider",
        offer: "Offer",
        deadline: "Deadline",
        milestones: "MIlestoens",
      },
      {
        date: "Date",
        service: "Services",
        serviceProvider: "Service Provider",
        offer: "Offer",
        deadline: "Deadline",
        milestones: "MIlestoens",
      },
      {
        date: "Date",
        service: "Services",
        serviceProvider: "Service Provider",
        offer: "Offer",
        deadline: "Deadline",
        milestones: "MIlestoens",
      },

    ];
  }

  ngOnInit() {
  }

}
