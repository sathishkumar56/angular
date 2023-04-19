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




@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    UiCardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyLibModule
    ,AppRoutingModule
  
  ],
  providers: [GlobalserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


