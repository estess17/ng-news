import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsPageComponent} from './news-page/news-page.component';
import {ArticlePageComponent} from './article-page/article-page.component';


const routes: Routes = [
  {path: '', component: NewsPageComponent},
  {path: 'article', component: ArticlePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
