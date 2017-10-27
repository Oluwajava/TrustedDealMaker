import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import {AppRoutingModule} from "./app-routing.module";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { BlogPageComponent } from "./pages/blog-page/blog-page.component";
import { BlogPageContentComponent } from "./pages/blog-page-content/blog-page-content.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { FaqPageComponent } from "./pages/faq-page/faq-page.component";
import { FreelancerPageComponent } from "./pages/freelancer-page/freelancer-page.component";
import { JobsPageComponent } from "./pages/jobs-page/jobs-page.component";
import { JobPageComponent } from "./pages/job-page/job-page.component";
import { JobCompletedPageComponent } from "./pages/job-completed-page/job-completed-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { PortfolioPageComponent } from "./pages/portfolio-page/portfolio-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { ReviewsPageComponent } from "./pages/reviews-page/reviews-page.component";
import { ServicesPageComponent } from "./pages/services-page/services-page.component";
import { ServicePageComponent } from "./pages/service-page/service-page.component";
import { ServicesListPageComponent } from "./pages/services-list-page/services-list-page.component";
import { SignupPageComponent } from "./pages/signup-page/signup-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {DashboardModule} from "./dashboard/dashboard.module";
import { MembershipComponent } from "./dashboard/membership/membership.component";
import {Ng2SmartTableModule} from "ng2-smart-table";
import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";
import {NguiDatetimePickerModule} from "@ngui/datetime-picker";
import {DataTablesModule} from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    BlogPageComponent,
    BlogPageContentComponent,
    ContactPageComponent,
    FaqPageComponent,
    FreelancerPageComponent,
    JobsPageComponent,
    JobPageComponent,
    JobCompletedPageComponent,
    LoginPageComponent,
    PortfolioPageComponent,
    RegisterPageComponent,
    ReviewsPageComponent,
    ServicesPageComponent,
    ServicePageComponent,
    ServicesListPageComponent,
    SignupPageComponent,
    MembershipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DashboardModule,
    Ng2SmartTableModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    NguiDatetimePickerModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
