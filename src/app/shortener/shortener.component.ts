import { Component } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss'],
})
export class ShortenerComponent {
  url = '';
  shortenedUrl = {};

  constructor(private urlService: UrlService) {}

  shortenUrl() {
    this.urlService.shortenUrl(this.url);
  }
}
