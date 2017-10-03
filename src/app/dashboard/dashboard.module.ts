import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ServiceBuyerComponent} from "./service-buyer/service-buyer.component";
import {ProfileComponent} from "./profile/profile.component";
import {MembershipPlanComponent} from "./membership-plan/membership-plan.component";
import {CoreModule} from "../core-module/core-module.module";
import {PostServiceComponent} from "./post-service/post-service.component";
import {MessageCenterComponent} from "./message-center/message-center.component";
import {PastWorkComponent} from "./past-work/past-work.component";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ServicePostedComponent} from "./service-posted/service-posted.component";
import {TrustedAccountComponent} from "./trusted-account/trusted-account.component";
import {IntegratedProjectComponent} from "./integrated-project/integrated-project.component";
import {RFIReceivedComponent} from "./rfireceived/rfireceived.component";
import {RFIPostedComponent} from "./rfiposted/rfiposted.component";
import {ActiveBidsComponent} from "./active-bids/active-bids.component";
import {BidWonComponent} from "./bid-won/bid-won.component";
import {OfferAcceptedComponent} from "./offer-accepted/offer-accepted.component";
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";
import {NguiDatetimePickerModule} from "@ngui/datetime-picker";

const COMPONENTS = [ServiceBuyerComponent, ProfileComponent, MembershipPlanComponent, PostServiceComponent, MessageCenterComponent,
  PastWorkComponent, ServicePostedComponent, TrustedAccountComponent, IntegratedProjectComponent, RFIReceivedComponent, RFIPostedComponent,
  ActiveBidsComponent, BidWonComponent, OfferAcceptedComponent]
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    Ng2SmartTableModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    NguiDatetimePickerModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class DashboardModule {
}
