import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.css']
})
export class UiCardComponent implements OnInit {
  @Input()
  locationName!: string;
  @Input()
  imageName!: string;

  constructor() { }
  ngOnInit(): void {
    if (this.imageName) {
      this.imageName = "./assets/" + this.imageName;
    } else {
      this.imageName = "./assets/download.jpg";
    }
  }
}