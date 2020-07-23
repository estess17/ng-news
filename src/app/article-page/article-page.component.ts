import {Component, Input, OnInit} from '@angular/core';
import {News} from '../shared/interfaces';
import {NewsService} from '../shared/services/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  article: News;

  @Input() news: News;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.article = this.newsService.currentArticle;
  }

}
