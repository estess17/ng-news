import {Pipe, PipeTransform} from '@angular/core';
import {News} from '../interfaces';

@Pipe({
  name: 'newsFilter'
})
export class PipeFilterPipe implements PipeTransform {
  transform(news: News[], value: string): News[] {
    if (!news || !value) {
      return news;
    }

    // return news.filter(n => n.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    return news.filter(n => n.title.toLowerCase().includes(value.toLowerCase()));
  }
}
