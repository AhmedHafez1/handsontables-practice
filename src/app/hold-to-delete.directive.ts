import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Directive({
  selector: '[holdToDelete]',
})
export class HoldToDeleteDirective {
  private holding = false;
  private progressPercent: number = 0;

  @Output() holdProgress: EventEmitter<number> = new EventEmitter();

  @HostListener('mousedown') startHoldToDelete() {
    this.holding = true;

    const holdToDeleteObservable = interval(50).pipe(
      takeWhile(() => this.holding)
    );
  }

  @HostListener('mouseup') endHoldToDelete() {
    this.holding = false;
  }

  progressPercentage() {
    if (this.progressPercent < 100) {
      this.progressPercent += 2;
    }
    if (this.progressPercent > 100) {
      this.progressPercent = 100;
    }
  }
}
