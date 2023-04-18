import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-com',
  templateUrl: '../ui/com.component.html',
  styleUrls: ['../ui/style.css']
})
export class ComComponent {
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
