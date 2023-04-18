import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ComComponent } from './com/com.component';




@NgModule({
  declarations: [
    MyLibComponent,
    ComComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    ComComponent
  ]
})
export class MyLibModule { }
