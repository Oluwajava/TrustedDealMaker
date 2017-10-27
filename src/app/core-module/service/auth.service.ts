import {Inject, Injectable} from "@angular/core";
import {ApplicationRepository} from "./repository/application-repository";
import {Constants} from "../constants-utils";
import {Router} from "@angular/router";
/**
 * Created by Mayokun on 8/30/2017.
 */
@Injectable()
export class AuthService {

  constructor(private applicationRepository: ApplicationRepository, private router: Router) {
  }

  login(data, response: (response: boolean) => void) {
    if(data.username == "test" && data.password == "test") {
      localStorage.setItem(Constants.CURRENT_USER, JSON.stringify(data));
      response(true);
    }

    response(false);

  }


  logout() {
    localStorage.removeItem(Constants.CURRENT_USER);
    console.log(this.isLoggedIn());
    console.log(localStorage.getItem(Constants.CURRENT_USER))
    this.router.navigateByUrl("login")
  }

  isLoggedIn() {
    console.log(localStorage.getItem(Constants.CURRENT_USER) != null)
    if (localStorage.getItem(Constants.CURRENT_USER) != null) {
      return true;
    }
    return false;
  }
}
