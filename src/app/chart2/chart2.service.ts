import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Chart2Service {
  constructor(private httpClient: HttpClient) {}

  httpOption: any;
  api = 'https://dummyjson.com/';

  getData() {
    return this.httpClient.get(this.api + 'products');
  }
}
