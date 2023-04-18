import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Animation',
  templateUrl: '../ui/animation.html',
  styleUrls: ['../ui/style.css']
})
export class Animation implements OnInit{
  @Input() vsecomimage:any=[]
  sliderId: any;
  imageItereate=0;

  constructor(){}

  ngOnInit() {
      setTimeout(() => {
          this.test()
          }, 1000);  
  }
  test () {
      this.sliderId = document.getElementsByClassName('slider-div');
      this.sliderId[this.imageItereate].classList.add("slider-active");
      setTimeout(() => {
        this.sliderId[this.imageItereate].classList.remove("slider-active");
      }, 4000);
      setTimeout(() => {
        this.imageItereate++;
        if (this.imageItereate < this.sliderId.length) {
          this.test();
        }
        else {
          this.imageItereate = 0;
          this.test();
        }
      }, 4000);
    }

}
