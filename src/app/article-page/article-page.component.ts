import {Component, Input, OnInit} from '@angular/core';
import {News} from '../shared/interfaces';
import {NewsService} from '../shared/services/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article: News;

  @Input() news: News;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.article = this.newsService.currentArticle;
  }

}
