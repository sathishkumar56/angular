import { Component, Input, OnInit } from '@angular/core';
import { GlobalserviceService } from '../service/globalservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.css'],
  providers: []
})
export class UiCardComponent implements OnInit {
  
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

