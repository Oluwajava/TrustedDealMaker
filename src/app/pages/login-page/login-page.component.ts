import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core-module/service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Constants} from "../../core-module/constants-utils";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.loginForm = formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {
    // reset login §status
    this.authService.logout();
    // get return url from route parameters or default to "/"
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/service-buyer";
  }

  login(form) {
    this.authService.login(form, (response) => {
      if (response == true) {
        this.router.navigateByUrl(this.returnUrl);
      }
    })
  }
}
