import { Component, OnInit } from "@angular/core";
import {
  Meta,
  MetaDefinition,
  Title,
  DomSanitizer,
} from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { SanityService } from "src/app/services";

@Component({
  selector: "app-industry",
  templateUrl: "./industry.component.html",
  styleUrls: ["./industry.component.scss"],
})
export class PageIndustry implements OnInit {
  pageContents;
  content;
  industry;
  industrySlug: string;
  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private sanityService: SanityService,
    private sanitizer: DomSanitizer
  ) {
    // set default
    this.content = [
      {
        userType: "Freelancers",
        tagLine:
          "We can put 5k back in your pocket this year starting today <br> Lets walk you through it!",
        aboutBlock: {
          subtitle: "How are we going to do it?",
          title: `We're going to make <br> doing business fair`,
          sections: [
            {
              title: "How are we",
              contents:
                "Some text about this bit here, Some text about this bit here. Some text about this bit here - Some text about this bit here",
              link: "link",
              linkTitle: "link title",
            },
            {
              title: "How are we",
              contents:
                "Some text about this bit here, Some text about this bit here. Some text about this bit here - Some text about this bit here",
              link: "",
              linkTitle: "",
            },
            {
              title: "How are we",
              contents: "Some text about this bit here, ",
              link: "",
              linkTitle: "",
            },
          ],
        },
        howBlock: {
          subtitle: "No more late payments",
          title: "Contracts made easy",
          contents: `<ul class="list-type-02">
          <li>
           We assist efficient business
            management
          </li>
          <li>
          We identify your requirements and
            design an ideal relationship structure to fit your needs
          </li>
          <li>
       Our latest thinking on the issues
            that matter most in business
          </li>
        </ul>`,
        },
        breakdownBlock: {
          subtitle: "What else do we do",
          title: "We manange the comms so you can do the work",
          contents: "some extra stuff goes here",
          sections: [
            { title: "Status Reporting", description: "Extra stuff here" },
            { title: "Status Reporting", description: "Extra stuff here" },
          ],
        },
      },
    ];
    this.route.params.subscribe((data) => {
      this.industrySlug = data.industry.toLowerCase();
      this.pageContents = this.content.find(
        (x) => x.userType.toLowerCase() === this.industrySlug
      )
        ? this.content.find(
            (x) => x.userType.toLowerCase() === this.industrySlug
          )
        : this.content.find((x) => x.userType.toLowerCase() === "freelancers");
      this.setMetatags();
    });
  }

  async ngOnInit() {
    this.industry = await this.sanityService.getIndustry(this.industrySlug);
    if (this.industry) {
      this.industry.tagLine = this.sanitizer.bypassSecurityTrustHtml(
        await this.sanityService.processRichText(this.industry.tagLine)
      );
      this.industry.aboutBlock.title = this.sanitizer.bypassSecurityTrustHtml(
        await this.sanityService.processRichText(this.industry.aboutBlock.title)
      );
      this.industry.howBlock.title = this.sanitizer.bypassSecurityTrustHtml(
        await this.sanityService.processRichText(this.industry.howBlock.title)
      );
      this.industry.howBlock.contents = this.sanitizer.bypassSecurityTrustHtml(
        await this.sanityService.processRichText(
          this.industry.howBlock.contents
        )
      );
      this.industry.breakdownBlock.title = this.sanitizer.bypassSecurityTrustHtml(
        await this.sanityService.processRichText(
          this.industry.breakdownBlock.title
        )
      );
      this.pageContents = this.industry;
      this.setMetatags();
    }
  }

  setMetatags() {
    const description: MetaDefinition = {
      name: "description",
      content: this.pageContents.tagLine,
    };
    this.meta.updateTag(description, "description");
    this.title.setTitle("MilestonePay | We help " + this.pageContents.userType);
  }
}
