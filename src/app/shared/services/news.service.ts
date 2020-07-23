import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {News} from '../interfaces';

@Injectable({providedIn: 'root'})
export class NewsService {
  apiKey = 'ab92d3cf53fd49a28bc8fbc16343be51';
  url = `https://newsapi.org/v2/everything?q=bitcoin&pageSize=100&apiKey=${this.apiKey}`;

  currentArticle: News;

  constructor(private http: HttpClient) {
  }

  getNews(): any {
    return this.http.get(this.url);
  }

}
