import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {
  

  constructor() { }

  logSomeMessage(msg: any) { 
    return("Message from consumer is : " + msg); 
	}
  getdata(): string[] {
    return ['C','C++', 'JAVA', 'Python'];
}
}
