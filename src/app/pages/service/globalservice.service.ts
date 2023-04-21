import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  apiurl='https://jsonplaceholder.typicode.com/todos/1';
  constructor(private httpClient: HttpClient) { }

  logSomeMessage() { 
    return this.httpClient.get(this.apiurl);

	}
 
}

