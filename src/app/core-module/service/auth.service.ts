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
    this.applicationRepository.query({destination: Constants.LOGIN, item: data}, callback => {
      localStorage.setItem(Constants.CURRENT_USER, callback);
      response(true);
    });
  }

  logout() {
    localStorage.removeItem(Constants.CURRENT_USER);
  }

  isLoggedIn() {
    if (!!localStorage.getItem(Constants.CURRENT_USER)) {
      return true;
    }
    return false;
  }
}
