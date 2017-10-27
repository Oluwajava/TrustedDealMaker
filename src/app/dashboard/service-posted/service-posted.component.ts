import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-service-posted',
  templateUrl: './service-posted.component.html',
  styleUrls: ['./service-posted.component.css']
})
export class ServicePostedComponent implements OnInit {

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
    };
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
