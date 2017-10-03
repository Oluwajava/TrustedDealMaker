import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-posted',
  templateUrl: './service-posted.component.html',
  styleUrls: ['./service-posted.component.css']
})
export class ServicePostedComponent implements OnInit {

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
  }

}
