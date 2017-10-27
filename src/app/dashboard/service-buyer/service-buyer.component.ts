import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-buyer',
  templateUrl: './service-buyer.component.html',
  styleUrls: ['./service-buyer.component.css']
})
export class ServiceBuyerComponent implements OnInit {

  data: any[];

  constructor(private router: Router) {
    this.data = [
      {
        projectName: "Date",
        type: "Project Name",
        serviceBuyer: "Service Buyer Name",
        projectProcess: "Bid Amount",
        timeLapse: "Bid Amount",
        bids: "Bid Amount",
        budget: "Bid Amount",
      },{
        projectName: "Accounting 27-7-2016 Accounting 27-7-2026",
        type: "Service",
        serviceBuyer: "Vishal rathod",
        projectProcess: "27 Jul 16",
        timeLapse: "",
        bids: "1",
        budget: "200 - 5000",
      },{
        projectName: "Auto Detailing",
        type: "Offer",
        serviceBuyer: "Vishal Rathod",
        projectProcess: "01 Aug 16",
        timeLapse: "Bid Amount",
        bids: "1",
        budget: "500-8000",
      },{
        projectName: "Accounting 27-7-2016 Accounting 27-7-2026",
        type: "Service",
        serviceBuyer: "Vishal Rathod",
        projectProcess: "27 Jul 16",
        timeLapse: "",
        bids: "1",
        budget: "200 - 5000",
      },{
        projectName: "Auto Detailing",
        type: "Offer",
        serviceBuyer: "Vishal Rathod",
        projectProcess: "01 Aug 16",
        timeLapse: "Bid Amount",
        bids: "1",
        budget: "500-8000",
      },{
        projectName: "Auto Detailing",
        type: "Offer",
        serviceBuyer: "Vishal Rathod",
        projectProcess: "01 Aug 16",
        timeLapse: "Bid Amount",
        bids: "1",
        budget: "500-8000",
      },
    ];
  }

  ngOnInit() {
  }

  detail() {
    this.router.navigateByUrl("service-detail")

  }
}
