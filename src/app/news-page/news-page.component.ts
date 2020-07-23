import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {News} from '../shared/interfaces';
import {NewsService} from '../shared/services/news.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  news: News[] = [];
  pageSlice = this.news.slice(0, 10);

  value = '';

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.news = news.articles;
    });
  }

  OnPageChange(event: PageEvent): any {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.news.length) {
      endIndex = this.news.length;
    }
    this.pageSlice = this.news.slice(startIndex, endIndex);
  }

  goToNews(news: News): any {
    this.newsService.currentArticle = news;
    this.router.navigate(['/news-single']);
  }
}
