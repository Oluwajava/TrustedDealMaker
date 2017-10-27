import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-active-bids',
  templateUrl: './active-bids.component.html',
  styleUrls: ['./active-bids.component.css']
})
export class ActiveBidsComponent implements OnInit {

  isServiceBuyer;
  settings: any;
  data: any;

  constructor(private activatedRoute: ActivatedRoute) {
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
        offer: {
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
        service: "Services",
        offer: "Offer",
        budget: "Deadline",
      },
      {
        date: "Date",
        service: "Services",
        offer: "Offer",
        budget: "Deadline",
      },
      {
        date: "Date",
        service: "Services",
        offer: "Offer",
        budget: "Deadline",
      },
      {
        date: "Date",
        service: "Services",
        offer: "Offer",
        budget: "Deadline",
      },

    ];
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.isServiceBuyer = params['q'];
    });
  }

}
