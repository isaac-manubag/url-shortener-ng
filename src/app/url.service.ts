import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}

  shortenUrl(url: string) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url) && url != '') {
      url = 'http://' + url;
    }
    return this.http.post(`${environment.apiUrl}/shorten`, {
      url,
    });
  }
}
