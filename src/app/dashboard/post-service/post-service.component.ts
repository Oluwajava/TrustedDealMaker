import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.css']
})
export class PostServiceComponent implements OnInit {

  isPostServiceRequest = true;

  constructor() { }

  ngOnInit() {
  }

}
