import {RouterModule, Routes} from "@angular/router";
import {ServicesPageComponent} from "../pages/services-page/services-page.component";
import {ServicePageComponent} from "../pages/service-page/service-page.component";
import {ServiceBuyerComponent} from "./service-buyer/service-buyer.component";
import {ProfileComponent} from "./profile/profile.component";
import {MembershipPlanComponent} from "./membership-plan/membership-plan.component";
import {PostServiceComponent} from "./post-service/post-service.component";
import {MessageCenterComponent} from "./message-center/message-center.component";
import {PastWorkComponent} from "./past-work/past-work.component";
import {ServicePostedComponent} from "./service-posted/service-posted.component";
import {TrustedAccountComponent} from "./trusted-account/trusted-account.component";
import {IntegratedProjectComponent} from "./integrated-project/integrated-project.component";
import {RFIPostedComponent} from "./rfiposted/rfiposted.component";
import {RFIReceivedComponent} from "./rfireceived/rfireceived.component";
import {ActiveBidsComponent} from "./active-bids/active-bids.component";
import {BidWonComponent} from "./bid-won/bid-won.component";
import {OfferAcceptedComponent} from "./offer-accepted/offer-accepted.component";
import {NgModule, Optional, SkipSelf} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "../core-module/service/auth.guard";
import {ServiceDetailComponent} from "./service-detail/service-detail.component";

const childrenRoutes: Routes = [
  {path: "", component: ProfileComponent},
  {path: "services", component: ServicesPageComponent},
  {path: "service", component: ServicePageComponent},
  {path: "service-detail", component: ServiceDetailComponent},
  {path: "service-buyer", component: ServiceDetailComponent},
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

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, children: childrenRoutes}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  constructor(@Optional() @SkipSelf() appRoutingModule: DashboardRoutingModule) {
    if (appRoutingModule) {
      throw new Error("AppRoutingModule can only be a singleton imported by the Root AppModule");
    }
  }
}
