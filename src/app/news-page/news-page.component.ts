import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {News} from '../shared/interfaces';
import {NewsService} from '../shared/services/news.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  news: News[] = [];
  filter = '';

  startIndex = 0;
  endIndex = 10;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.news = news.articles;
    });

    this.filter = localStorage.getItem('filter');
  }

  getPaginatorData(event: PageEvent): PageEvent {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;
    return event;
  }

  goToNews(article: News): any {
    this.newsService.currentArticle = article;
    this.router.navigate(['/article']);
  }

  onFilter(): void {
    localStorage.setItem('filter', this.filter);
  }

  clearFilter(): void {
    localStorage.setItem('filter', '');
    this.filter = '';
  }
}
