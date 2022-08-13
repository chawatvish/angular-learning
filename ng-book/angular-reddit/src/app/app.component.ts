import { Article } from './article/article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]

  constructor() { 
    this.articles = [
      new Article(
        'Angular',
        'http://argular.io',
        3
      ),
      new Article(
        'FullStack',
        'http://fullstack.io',
        2
      ),
      new Article(
        'Angular Homepage',
        'http://argular.io',
        1
      ),
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`)
    this.articles.push(new Article(title.value, link.value, 0))
    title.value = ''
    link.value = ''
    return false
  }
 }
