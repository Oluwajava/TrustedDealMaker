import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bid-won',
  templateUrl: './bid-won.component.html',
  styleUrls: ['./bid-won.component.css']
})
export class BidWonComponent implements OnInit {

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
        project: {
          title: 'Project Name'
        },
        serviceBuyer: {
          title: 'Service Buyer Name'
        },
        bidAmount: {
          title: 'Bid Amount'
        },
        deadline: {
          title: 'Deadline'
        },
        milestones: {
          title: 'Milestones'
        }
      }
    }
    ;

    this.data = [
      {
        date: "Date",
        project: "Project Name",
        serviceBuyer: "Service Buyer Name",
        bidAmount: "Bid Amount",
        deadline: "Deadlin",
        milestones: "Milestones",
      }, {
        date: "Date",
        project: "Project Name",
        serviceBuyer: "Service Buyer Name",
        bidAmount: "Bid Amount",
        deadline: "Deadlin",
        milestones: "Milestones",
      }, {
        date: "Date",
        project: "Project Name",
        serviceBuyer: "Service Buyer Name",
        bidAmount: "Bid Amount",
        deadline: "Deadlin",
        milestones: "Milestones",
      }, {
        date: "Date",
        project: "Project Name",
        serviceBuyer: "Service Buyer Name",
        bidAmount: "Bid Amount",
        deadline: "Deadlin",
        milestones: "Milestones",
      }, {
        date: "Date",
        project: "Project Name",
        serviceBuyer: "Service Buyer Name",
        bidAmount: "Bid Amount",
        deadline: "Deadlin",
        milestones: "Milestones",
      }, {
        date: "Date",
        project: "Project Name",
        serviceBuyer: "Service Buyer Name",
        bidAmount: "Bid Amount",
        deadline: "Deadlin",
        milestones: "Milestones",
      }, {
        date: "Date",
        project: "Project Name",
        serviceBuyer: "Service Buyer Name",
        bidAmount: "Bid Amount",
        deadline: "Deadlin",
        milestones: "Milestones",
      },

    ];
  }

  ngOnInit() {
  }

}
