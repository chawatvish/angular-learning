import { Article } from './article.model';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'
  @Input() article?: Article

  ngOnInit(): void {
  }

  voteUp(): boolean {
    this.article?.voteUp()
    return false
  }

  voteDown(): boolean {
    this.article?.voteDown()
    return false
  }

}
