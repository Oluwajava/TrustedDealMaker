import {Component, Input, OnInit} from '@angular/core';
import {ServiceList} from "./sevice-list.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  @Input() title: String;
  @Input() subTitle: String;
  @Input() list: Array<ServiceList>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  addFilter(searchTitle, query) {
    const currentParams = this.activatedRoute.snapshot.queryParams;


    this.router.navigate(["/services"], {

      queryParams: {...currentParams, searchTitle: query},
    });

  }
}
