import { Component, OnInit } from '@angular/core'
import { ComponentTitleDto, ArticleDto } from 'src/app/classes'
import { SanityService } from '../../services'

@Component({
  selector: 'page-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class PageBlog implements OnInit {
  articles: ArticleDto[]
  titleObject: ComponentTitleDto
  client: any
  environment
  constructor(private sanityService: SanityService) {
    this.titleObject = {
      title: 'articles about growing your business',
      subtitle: 'the blog',
    }
  }

  async ngOnInit() {
    this.articles = await this.sanityService.getBlogPosts()
  }
}
