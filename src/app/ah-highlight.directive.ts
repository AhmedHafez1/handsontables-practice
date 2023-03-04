import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ahHighlight]',
})
export class AhHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
