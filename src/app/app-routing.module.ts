import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './pages/gpay/payment.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { PaypalComponent } from './pages/paypal/paypal.component';
import { UiCardComponent } from './pages/ui-card/ui-card.component';



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
