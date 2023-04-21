import { Component, HostListener, Input, OnInit } from '@angular/core';
import { GlobalserviceService } from '../service/globalservice.service';

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.css'],
  providers: []
})
export class UiCardComponent implements OnInit {

  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(event: MouseEvent) {
    this.numberOfClicks++;
    console.log('Button clicked:', event, 'Number of clicks:', this.numberOfClicks);
  }

  @Input()
  locationName!: string;
  @Input()
  imageName!: string;
  
  course:any;
  posts: any[] | undefined;
  constructor(private GlobalserviceService: GlobalserviceService) {}
  ngOnInit(): void {
    this.GlobalserviceService.logSomeMessage()
    .subscribe((data: any) => {
      this.posts =data; 
      // [data.userId,
      // data.id,data.title,
      // data.completed];
      // [{ key: 'userId', value: data.userId },
      // { key: 'ID', value: data.id },
      // { key: 'Title', value: data.title },
      // { key: 'Completed', value: data.completed }];
  });
    if (this.imageName) {
      this.imageName = "./assets/" + this.imageName;
    } else {
      this.imageName = "./assets/download.jpg";
    }
  }
}

