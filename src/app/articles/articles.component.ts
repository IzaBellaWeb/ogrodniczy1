import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../articles.service';
import {Article} from '../article';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {



  this.articleService.getArticles().subscribe(articles => {
    this.articles = articles;

  });
}

}
