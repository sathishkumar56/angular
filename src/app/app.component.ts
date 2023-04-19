import { Component } from '@angular/core';
import { GlobalserviceService } from './service/globalservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalserviceService], 
})
export class AppComponent {
  
  courses: string[] | undefined;
  course:any;
  constructor(private GlobalserviceService: GlobalserviceService) {}
  
  ngOnInit() {
    this.courses = this.GlobalserviceService.getdata();
    this.course = this.GlobalserviceService.logSomeMessage("hi");
  }
}


