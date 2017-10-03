import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rfiposted',
  templateUrl: './rfiposted.component.html',
  styleUrls: ['./rfiposted.component.css']
})
export class RFIPostedComponent implements OnInit {
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
        sentRFI: {
          title: 'Sent RFI'
        },
        date: {
          title: 'Date of Sent RFI'
        }
      }
    }
    ;

    this.data = [
      {
        sentRFI: "Sent RFI",
        date: "Date of Sent RFI"
      },
      {
        sentRFI: "Sent RFI",
        date: "Date of Sent RFI"
      },
      {
        sentRFI: "Sent RFI",
        date: "Date of Sent RFI"
      },
      {
        sentRFI: "Sent RFI",
        date: "Date of Sent RFI"
      }

    ];
  }

  ngOnInit() {
  }

}
