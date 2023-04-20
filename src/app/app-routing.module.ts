import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiCardComponent } from './ui-card/ui-card.component';


const routes: Routes = [{ path: '', component: UiCardComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
