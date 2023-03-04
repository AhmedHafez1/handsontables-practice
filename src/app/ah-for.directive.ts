import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ahFor]',
})
export class AhForDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set ahForOf(items: any[]) {
    this.viewContainerRef.clear();

    if (items && items.length) {
      for (let item of items) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          $implicit: item,
        });
      }
    }
  }
}
