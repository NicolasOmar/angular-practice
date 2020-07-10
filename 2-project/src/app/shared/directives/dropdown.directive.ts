import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[customDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;

    const action = this.isOpen ? 'add' : 'remove';
    this.elRef.nativeElement.querySelector('.dropdown-menu').classList[action]('show')
  }

  constructor(
    private elRef: ElementRef
  ) {}
}