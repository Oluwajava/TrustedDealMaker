import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule, Optional, SkipSelf} from "@angular/core";
import {CoreModule} from "./core-module/core-module.module";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {BlogPageComponent} from "./pages/blog-page/blog-page.component";
import {BlogPageContentComponent} from "./pages/blog-page-content/blog-page-content.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {FaqPageComponent} from "./pages/faq-page/faq-page.component";
import {FreelancerPageComponent} from "./pages/freelancer-page/freelancer-page.component";
import {JobsPageComponent} from "./pages/jobs-page/jobs-page.component";
import {JobPageComponent} from "./pages/job-page/job-page.component";
import {JobCompletedPageComponent} from "./pages/job-completed-page/job-completed-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {PortfolioPageComponent} from "./pages/portfolio-page/portfolio-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {ReviewsPageComponent} from "./pages/reviews-page/reviews-page.component";
import {ServicePageComponent} from "./pages/service-page/service-page.component";
import {ServicesPageComponent} from "./pages/services-page/services-page.component";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {AuthGuard} from "./core-module/service/auth.guard";
import {ServiceBuyerComponent} from "./dashboard/service-buyer/service-buyer.component";
import {ProfileComponent} from "./dashboard/profile/profile.component";
import {MembershipPlanComponent} from "./dashboard/membership-plan/membership-plan.component";
import {PostServiceComponent} from "./dashboard/post-service/post-service.component";
import {MessageCenterComponent} from "./dashboard/message-center/message-center.component";
import {PastWorkComponent} from "./dashboard/past-work/past-work.component";
import {ServicePostedComponent} from "./dashboard/service-posted/service-posted.component";
import {TrustedAccountComponent} from "./dashboard/trusted-account/trusted-account.component";
import {IntegratedProjectComponent} from "./dashboard/integrated-project/integrated-project.component";
import {RFIPostedComponent} from "./dashboard/rfiposted/rfiposted.component";
import {RFIReceivedComponent} from "./dashboard/rfireceived/rfireceived.component";
import {ActiveBidsComponent} from "./dashboard/active-bids/active-bids.component";
import {BidWonComponent} from "./dashboard/bid-won/bid-won.component";
import {OfferAcceptedComponent} from "./dashboard/offer-accepted/offer-accepted.component";

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "about", component: AboutPageComponent},
  {
    path: "blog", component: BlogPageComponent,
    children: [
      {path: "content", component: BlogPageContentComponent}
    ]
  },
  {path: "contact", component: ContactPageComponent},
  {path: "faq", component: FaqPageComponent},
  {path: "freelancer", component: FreelancerPageComponent},
  {path: "jobs", component: JobsPageComponent, canActivate: [AuthGuard], children: [
    {path: "job", component: JobPageComponent},
    {path: "complete", component: JobCompletedPageComponent}
  ]},
  {path: "login", component: LoginPageComponent},
  {path: "portfolio", component: PortfolioPageComponent, canActivate: [AuthGuard]},
  {path: "register", component: RegisterPageComponent},
  {path: "reviews", component: ReviewsPageComponent, canActivate: [AuthGuard]},
  {path: "services", component: ServicesPageComponent, canActivate: [AuthGuard]},
  {path: "service", component: ServicePageComponent, canActivate: [AuthGuard]},
  {path: "signup", component: SignupPageComponent},
  {path: "service-buyer", component: ServiceBuyerComponent},
  {path: "profile", component: ProfileComponent},
  {path: "membership-plan", component: MembershipPlanComponent},
  {path: "post-service", component: PostServiceComponent},
  {path: "message-center", component: MessageCenterComponent},
  {path: "past-work", component: PastWorkComponent},
  {path: "service-posted", component: ServicePostedComponent},
  {path: "trusted-account", component: TrustedAccountComponent},
  {path: "integrated-project", component: IntegratedProjectComponent},
  {path: "show_rfi", component: RFIPostedComponent},
  {path: "show_rfiList", component: RFIReceivedComponent},
  {path: "active_bids", component: ActiveBidsComponent},
  {path: "bid_won", component: BidWonComponent},
  {path: "offer_accepted", component: OfferAcceptedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule.forRoot()],
  exports: [RouterModule, CoreModule],
})
export class AppRoutingModule {
  constructor(@Optional() @SkipSelf() appRoutingModule: AppRoutingModule) {
    if (appRoutingModule) {
      throw new Error("AppRoutingModule can only be a singleton imported by the Root AppModule");
    }
  }
}
