import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { Animation } from './com/animation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyLibComponent,
    Animation
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MyLibComponent,
    Animation
  ]
})
export class MyLibModule { }
