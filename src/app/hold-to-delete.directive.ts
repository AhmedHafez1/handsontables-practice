import {
  Directive,
  EventEmitter,
  HostListener,
  Output,
  Input,
} from '@angular/core';
import { interval, takeWhile, Subscription } from 'rxjs';

@Directive({
  selector: '[holdToDeleteTime]',
})
export class HoldToDeleteDirective {
  private holding = false;
  private holdSubscription!: Subscription;

  @Input() holdToDeleteTime: number = 2;
  @Output() holdProgress: EventEmitter<number> = new EventEmitter();
  @Output() confirmDelete: EventEmitter<void> = new EventEmitter();

  @HostListener('mousedown') startHoldToDelete() {
    this.holding = true;

    const holdToDeleteObservable = interval(100).pipe(
      takeWhile(() => this.holding)
    );

    this.holdSubscription = holdToDeleteObservable.subscribe((v) => {
      const progress = (v / this.holdToDeleteTime) * 10;
      this.holdProgress.emit(progress);
      if (progress === 100) {
        this.holding = false;
        this.confirmDelete.emit();
      }
    });
  }

  @HostListener('mouseup') endHoldToDelete() {
    this.holding = false;
    this.holdProgress.emit(0);
    this.holdSubscription.unsubscribe();
  }
}
