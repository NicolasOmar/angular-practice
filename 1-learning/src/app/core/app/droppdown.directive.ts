import { Directive, HostListener, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[angular-dropdown]'
})

export class DropdownDirective {
  toggleDropdown : boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('click', ['$event'])
  onClick(event) {
    if (this.el.nativeElement.classList.contains('show')) {
      this.renderer.removeClass(this.el.nativeElement, 'show');
      this.renderer.setAttribute(this.el.nativeElement.childNodes[0], 'aria-expanded', 'false')
      this.renderer.removeClass(this.el.nativeElement.childNodes[1], 'show')
    } else {
      this.renderer.addClass(this.el.nativeElement, 'show')
      this.renderer.setAttribute(this.el.nativeElement.childNodes[0], 'aria-expanded', 'true')
      this.renderer.addClass(this.el.nativeElement.childNodes[1], 'show')
    }
  }
}