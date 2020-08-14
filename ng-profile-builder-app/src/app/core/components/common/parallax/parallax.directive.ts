import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pbaParallax]'
})
export class ParallaxDirective {
@Input ('ratio') paralaxratio: number;
@Input ('isParallaxReady') isParallaxReady: boolean;

initialTop = 0;

  constructor(private ref: ElementRef) {
      this.initialTop = this.ref.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  OnWindowScroll(event: any) {
      this.ref.nativeElement.style.marginTop = (this.initialTop - (window.scrollY * this.paralaxratio)) + 'px';
      console.log(this.ref.nativeElement.top);
  }

  ngOnChanges(): void {
    // if (this.isParallaxReady === true) {
    //   (function(that) {setTimeout(() => {
    //     that.initialTop = that.ref.nativeElement.getBoundingClientRect().top;
    //     console.log(that.initialTop);
    //   }, 2000)})(this);
    // }
  }
}
