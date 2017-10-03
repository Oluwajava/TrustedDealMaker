import {ModuleWithProviders, NgModule, Optional, SkipSelf} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from "../app-routing.module";
import { CardComponent } from './card/card.component';
import { JobCardComponent } from './job-card/job-card.component';
import { ServiceListComponent } from './service-list/service-list.component';
import {HttpRepository} from "./service/repository/http-repository";
import {CacheRepository} from "./service/repository/cache-repository";
import {ApplicationRepository} from "./service/repository/application-repository";
import {CoreService} from "./service/core.service";
import {InterceptedHttp} from "./service/interceptedhttp.service";
import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import {httpFactory} from "./service/http-factory";
import {AuthGuard} from "./service/auth.guard";
import {AuthService} from "./service/auth.service";
import { HeaderComponent } from './header/header.component';

const COMPONENTS: any[] = [NavbarComponent, CardComponent, JobCardComponent, ServiceListComponent, HeaderComponent];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  providers: [ApplicationRepository, HttpRepository, CacheRepository]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [CoreService, AuthService, AuthGuard, ApplicationRepository, HttpRepository, CacheRepository, InterceptedHttp, {
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions]
      }]
    };
  }

  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error("CoreModule is a singleton that should only be imported by the AppModule");
    }
  }

}
