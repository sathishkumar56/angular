import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MyLibModule } from 'projects/my-lib/src/lib/my-lib.module';
import { AppRoutingModule } from './app-routing.module';
import { UiCardComponent } from './ui-card/ui-card.component';
import { GlobalserviceService } from './service/globalservice.service';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './gpay/payment.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { PaypalComponent } from './paypal/paypal.component';
import { NgxPayPalModule } from 'ngx-paypal';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    UiCardComponent,
    PaymentComponent,
    PaypalComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyLibModule
    ,AppRoutingModule,
    HttpClientModule,
    GooglePayButtonModule,
    NgxPayPalModule
  
  ],
  providers: [GlobalserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


