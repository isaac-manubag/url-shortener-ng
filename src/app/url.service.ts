import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}

  shortenUrl(url) {
    return this.http
      .get(`http://localhost:3000/shorten?url=${url}`)
      .subscribe(data => {
        console.log('response data', data);
      });
  }
}
