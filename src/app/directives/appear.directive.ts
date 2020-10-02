import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from "@angular/core";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/startWith";
import { Subscription } from "rxjs/Subscription";

@Directive({
  selector: "[appear]",
})
export class DirectiveAppear implements AfterViewInit, OnDestroy {
  @Output() appear: EventEmitter<boolean>;
  appeared: boolean = false;
  elementPos: number;
  elementHeight: number;

  scrollPos: number;
  windowHeight: number;

  subscriptionScroll: Subscription;
  subscriptionResize: Subscription;

  constructor(private element: ElementRef) {
    this.appear = new EventEmitter<false>();
  }

  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }
  saveScrollPos() {
    this.scrollPos = window.scrollY;
  }
  getOffsetTop(element: any) {
    let offsetTop = element.offsetTop || 0;
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  checkVisibility() {
    if (this.isVisible()) {
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions();
      if (this.isVisible()) {
        // this.unsubscribe();
        this.appeared = true;
        this.appear.emit(true);
      }
    }
    if (this.appeared && !this.isVisible()) {
      this.appear.emit(false);
    }
  }
  isVisible() {
    const rect = this.element.nativeElement.getBoundingClientRect();

    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left <
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */ &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    ); /* or $(window).height() */
  }

  scroll = (event): void => {
    this.saveDimensions();
    this.checkVisibility();
  };

  unsubscribe() {
    if (this.subscriptionScroll) {
      this.subscriptionScroll.unsubscribe();
    }
    if (this.subscriptionResize) {
      this.subscriptionResize.unsubscribe();
    }
  }

  ngAfterViewInit() {
    window.addEventListener("scroll", this.scroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener("scroll", this.scroll, true);
  }
}
