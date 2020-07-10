import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    // OLD WAY, NOT RECOMMENDED
    // this.elementRef.nativeElement.style.backgroundColor = 'green'

    // NEW WAY, THE RECOMENDED ONE
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
  }

  @HostListener('mouseenter') mouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
  }

}
