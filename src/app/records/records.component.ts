import { Component } from '@angular/core';
import { interval, Subscription, takeWhile } from 'rxjs';

export interface Record {
  id: number;
  name: string;
  holdToDelete: boolean;
  holdProgress: number;
}

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent {
  records: Record[] = [
    { id: 1, name: 'Record 1', holdToDelete: false, holdProgress: 0 },
    { id: 2, name: 'Record 2', holdToDelete: false, holdProgress: 0 },
    { id: 3, name: 'Record 3', holdToDelete: false, holdProgress: 0 },
  ];

  holdToDeleteSubscriptions: { [key: number]: Subscription } = {};

  startHoldToDelete(record: Record) {
    record.holdToDelete = true;
    const holdToDeleteObservable = interval(50).pipe(
      takeWhile(() => record.holdToDelete)
    );
    this.holdToDeleteSubscriptions[record.id] =
      holdToDeleteObservable.subscribe((intervalValue) => {
        this.progressPercentage(record);
      });
  }

  endHoldToDelete(record: Record) {
    if (record.holdToDelete && record.holdProgress >= 100) {
      // Delete the record if the user held down the delete button until the progress bar reached 100%
      this.deleteRecord(record);
    }
    record.holdToDelete = false;
    record.holdProgress = 0;

    if (this.holdToDeleteSubscriptions[record.id]) {
      this.holdToDeleteSubscriptions[record.id].unsubscribe();
      delete this.holdToDeleteSubscriptions[record.id];
    }
  }

  progressPercentage(record: Record) {
    if (record.holdProgress < 100) {
      record.holdProgress += 2;
    }
    if (record.holdProgress > 100) {
      record.holdProgress = 100;
    }
  }

  deleteRecord(record: Record) {
    const index = this.records.findIndex((rec) => record.id === rec.id);
    this.records.splice(index, 1);
  }
}
