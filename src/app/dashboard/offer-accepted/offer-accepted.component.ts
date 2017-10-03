import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-offer-accepted',
  templateUrl: './offer-accepted.component.html',
  styleUrls: ['./offer-accepted.component.css']
})
export class OfferAcceptedComponent implements OnInit {

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
          title: 'Services'
        },
        offers: {
          title: 'Offers'
        },
        budget: {
          title: 'Budget'
        }
      }
    }
    ;

    this.data = [
      {
        date: "Date",
        service: "Project Name",
        offers: "Service Buyer Name",
        budget: "Bid Amount"
      }, {
        date: "Date",
        service: "Project Name",
        offers: "Service Buyer Name",
        budget: "Bid Amount"
      }, {
        date: "Date",
        service: "Project Name",
        offers: "Service Buyer Name",
        budget: "Bid Amount"
      }, {
        date: "Date",
        service: "Project Name",
        offers: "Service Buyer Name",
        budget: "Bid Amount"
      }, {
        date: "Date",
        service: "Project Name",
        offers: "Service Buyer Name",
        budget: "Bid Amount"
      }, {
        date: "Date",
        service: "Project Name",
        offers: "Service Buyer Name",
        budget: "Bid Amount"
      },
    ];
  }

  ngOnInit() {
  }

}
