import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { UrlService } from '../url.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.3)', opacity: 0 }),
        animate(
          '1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }),
        ),
      ]),
    ]),
  ],
})
export class ShortenerComponent implements OnInit {
  url = '';
  shortenedUrl = {};
  shortenedUrlArray = [];
  apiUrl = environment.apiUrl;
  shortenUrlError = false;
  shortenUrlErrorMsg = '';

  constructor(private urlService: UrlService) {}

  ngOnInit() {}

  shortenUrl() {
    this.urlService.shortenUrl(this.url).subscribe(
      data => {
        this.shortenUrlError = false;
        this.shortenUrlErrorMsg = '';
        this.shortenedUrl = data;
        this.shortenedUrlArray.unshift(data);
      },
      err => {
        this.shortenUrlError = true;
        this.shortenUrlErrorMsg = err.error.message;
      },
    );
  }
}
