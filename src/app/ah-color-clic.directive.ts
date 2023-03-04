import {
  Directive,
  HostListener,
  ElementRef,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[ahColorClick]',
})
export class AhColorClickDirective {
  @Input() ahColorClick!: string;

  @HostBinding('style.color') color!: string;

  @HostListener('click') changeColor() {
    this.color = this.ahColorClick;
  }
}
