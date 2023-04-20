import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiCardComponent } from './ui-card/ui-card.component';
import { PaymentComponent } from './gpay/payment.component';
import { PaypalComponent } from './paypal/paypal.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  { path: '', component: UiCardComponent },
  { path: 'heros', component: HeroesComponent },
  { path: 'gpay', component: PaymentComponent },
  { path: 'paypal', component: PaypalComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
