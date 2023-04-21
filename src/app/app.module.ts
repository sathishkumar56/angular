import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { GooglePayButtonModule } from "@google-pay/button-angular";
import { NgxPayPalModule } from "ngx-paypal";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PaymentComponent } from "./pages/gpay/payment.component";
import { HeroDetailComponent } from "./pages/hero-detail/hero-detail.component";
import { HeroesComponent } from "./pages/heroes/heroes.component";
import { LoginComponent } from "./pages/login/login.component";
import { PaypalComponent } from "./pages/paypal/paypal.component";
import { GlobalserviceService } from "./pages/service/globalservice.service";
import { UiCardComponent } from "./pages/ui-card/ui-card.component";



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    UiCardComponent,
    PaymentComponent,
    PaypalComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule
    , AppRoutingModule,
    HttpClientModule,
    GooglePayButtonModule,
    NgxPayPalModule,


  ],
  providers: [GlobalserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


