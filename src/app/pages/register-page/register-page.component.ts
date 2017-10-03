import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../core-module/service/auth.service";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.css"]
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.registerForm = formBuilder.group({
      email: [""],
      fullName: [""],
      password: [""]
    });
  }

  ngOnInit() {
    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to "/"
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  submitForm(form) {
    console.log(form);
    this.authService.login(form, (response) => {
      if (response === true) {
        this.router.navigateByUrl(this.returnUrl);
      }
    })
  }


}
