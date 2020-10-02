import { Component, OnInit, Input } from '@angular/core'
import { ArticleDto } from 'src/app/classes'

@Component({
  selector: 'app-article-excerpt',
  templateUrl: './article-excerpt.component.html',
  styleUrls: ['./article-excerpt.component.scss'],
})
export class ComponentArticleExcerpt implements OnInit {
  @Input() article: ArticleDto
  excerpt: string
  constructor() {}

  ngOnInit() {
    if (this.article.excerpt) {
      this.excerpt = this.article.excerpt
    } else {
      console.log(this.article.body)
      const firstBodyText = this.article.body[0]?.children?.find(x => x._type === 'span')?.text
      firstBodyText
        ? (this.excerpt = firstBodyText)
        : (this.excerpt = `Our dev was an idiot and forgot to include an excerpt and yknow... text`)
    }
  }
}
