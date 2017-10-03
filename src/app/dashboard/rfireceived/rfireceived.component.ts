import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rfireceived',
  templateUrl: './rfireceived.component.html',
  styleUrls: ['./rfireceived.component.css']
})
export class RFIReceivedComponent implements OnInit {

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
        buyerName: {
          title: 'Buyer Name'
        },
        title: {
          title: 'Title'
        },
        endDate: {
          title: 'End Date'
        },
        status: {
          title: 'Status'
        }
      }
    }
    ;

    this.data = [
      {
        buyerName: "Sent RFI",
        title: "Date of Sent RFI",
        endDate: "Date of Sent RFI",
        status: "Date of Sent RFI"
      },
      {
        buyerName: "Sent RFI",
        title: "Date of Sent RFI",
        endDate: "Date of Sent RFI",
        status: "Date of Sent RFI"
      },
      {
        buyerName: "Sent RFI",
        title: "Date of Sent RFI",
        endDate: "Date of Sent RFI",
        status: "Date of Sent RFI"
      },
      {
        buyerName: "Sent RFI",
        title: "Date of Sent RFI",
        endDate: "Date of Sent RFI",
        status: "Date of Sent RFI"
      },

    ];
  }

  ngOnInit() {
  }

}
