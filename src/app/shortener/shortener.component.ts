import { Component } from '@angular/core';
import { UrlService } from '../url.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss'],
})
export class ShortenerComponent {
  url = 'https://platform.cloudways.com/apps/535374/deployment';
  shortenedUrl = {};
  shortenedUrlArray = [];
  apiUrl = environment.apiUrl;

  constructor(private urlService: UrlService) {}

  shortenUrl() {
    this.urlService.shortenUrl(this.url).subscribe(data => {
      this.shortenedUrl = data;
      this.shortenedUrlArray.unshift(data);
    });
  }
}
