import {Component, OnInit} from "@angular/core";
import {JobCardModel} from "../../core-module/job-card/job-card.model";
import {ServiceList} from "../../core-module/service-list/sevice-list.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: "app-services-page",
  templateUrl: "./services-page.component.html",
  styleUrls: ["./services-page.component.css"]
})
export class ServicesPageComponent implements OnInit {

  public searchForm: FormGroup;
  public _jobs: Array<JobCardModel>;
  public _categories: Array<ServiceList>;
  public _rating: Array<ServiceList>;
  public _reviews: Array<ServiceList>;
  public _ratePerHour: Array<ServiceList>;
  public _skillsRequired: Array<ServiceList>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this._categories = [
      {icon: "fa-code", title: "Web Development & IT", subTitle: "50+"},
      {icon: "fa-eye", title: "Design, Art & Multimedia", subTitle: "15"},
      {icon: "fa-pencil", title: "Writing & Translation", subTitle: "10"},
      {icon: "fa-cogs", title: "Admin Support", subTitle: "10"},
      {icon: "fa-table", title: "Management & Finance", subTitle: "10"},
      {icon: "fa-bullhorn", title: "Sales & Marketing", subTitle: "10"},
      {icon: "fa-wrench", title: "Engineering & Architecture", subTitle: "10"},
      {icon: "fa-legal", title: "Legal", subTitle: "10"},
      {icon: "fa-bars", title: "Other", subTitle: "10"},
    ];
    this._rating = [
      {icon: "fa-star", title: "5 Stars", subTitle: ""},
      {icon: "fa-star", title: "4+ Stars", subTitle: ""},
      {icon: "fa-star", title: "3+ Stars", subTitle: ""},
    ];
    this._reviews = [
      {icon: "fa-check-circle-o", title: "3+ Reviews", subTitle: ""},
      {icon: "fa-check-circle-o", title: "10+ Reviews", subTitle: ""},
      {icon: "fa-check-circle-o", title: "20+ Reviews", subTitle: ""},
      {icon: "fa-check-circle-o", title: "50+ Reviews", subTitle: ""},
    ];
    this._ratePerHour = [
      {icon: "fa-usd", title: "0 - 25", subTitle: ""},
      {icon: "fa-usd", title: "25 - 50", subTitle: ""},
      {icon: "fa-usd", title: "50 - 100", subTitle: ""},
      {icon: "fa-usd", title: "100 - 200", subTitle: ""},
      {icon: "fa-usd", title: "200+", subTitle: ""},
    ];
    this._skillsRequired = [
      {icon: "fa-check-circle-o", title: "Certifications", subTitle: ""},
      {icon: "fa-check-circle-o", title: "Testimonials", subTitle: ""},
      {icon: "fa-check-circle-o", title: "Both", subTitle: ""}
    ];
    this._jobs = [
      {
        image: "../../../assets/img/users/5.png",
        serviceTitle: "Programming",
        coperation: "Smart Solutions Inc.",
        description: "We are a highly skilled and energetic Kenya. based software development team with a       proven track record on Guru.com and our other business channels.We deliver excellent service built upon an open dialog...",
        skills: ["HTML5", "CSS3", "PHP 5.4", "MySql", "Bootstrap"],
        earned: "$ 734,600",
        location: "Kenya",
        ratePerHour: "$85"
      }
    ];

    this.searchForm = formBuilder.group({
      query: [""]
    });

    console.log(this._jobs);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let category = params["category"];
      console.log(category);
    });
  }
  set jobs(value: Array<JobCardModel>) {
    this._jobs = value;
  }

  set categories(value: Array<ServiceList>) {
    this._categories = value;
  }

  set rating(value: Array<ServiceList>) {
    this._rating = value;
  }

  set reviews(value: Array<ServiceList>) {
    this._reviews = value;
  }

  set ratePerHour(value: Array<ServiceList>) {
    this._ratePerHour = value;
  }

  set skillsRequired(value: Array<ServiceList>) {
    this._skillsRequired = value;
  }

}
