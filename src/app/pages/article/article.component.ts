import { AfterViewChecked, Component, OnInit } from '@angular/core'
import { DomSanitizer, Meta, MetaDefinition, Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { ArticleDto, ComponentTitleDto } from 'src/app/classes'
import { PrismService, SanityService } from 'src/app/services'

@Component({
  selector: 'page-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class PageArticle implements OnInit, AfterViewChecked {
  slug: string
  article: ArticleDto
  content: any
  titleObject: ComponentTitleDto
  highlighted = false

  constructor(
    private route: ActivatedRoute,
    private sanityService: SanityService,
    private sanitizer: DomSanitizer,
    private prismService: PrismService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async param => {
      this.slug = param.handle
      this.article = await this.sanityService.getArticle(this.slug)
      this.titleObject = new ComponentTitleDto(this.article.title, 'The Blog')
      this.title.setTitle(this.article.title)
      let meta: MetaDefinition = {
        content: this.article.excerpt,
        name: 'description',
      }
      this.meta.updateTag(meta)
      this.content = this.sanitizer.bypassSecurityTrustHtml(await this.sanityService.processRichText(this.article.body))
    })
  }

  ngAfterViewChecked() {
    if (this.content && !this.highlighted) {
      this.prismService.highlightAll()
      this.highlighted = true
    }
  }
}
