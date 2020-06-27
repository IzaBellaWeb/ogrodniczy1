import { Injectable } from '@angular/core';
import {Article} from './article';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articles: Article[];

  constructor() {
    this.articles = [
      {id: 1, name: 'Kwiatek', price: 200, amount:'1'},
      {id: 2, name: 'Doniczka', price: 280, amount:'1'},
      {id: 3, name: 'Wąż', price: 400, amount:'1'}
    ];

   }
   getArticles(): Observable<Article[]> {
    return of(this.articles);

  }

  getarticleById(id: number): Article{
    return this.articles.find(article => article.id === id);
  }

  addArticle(article: Article): void {
    this.articles.push(article);
  }
}
