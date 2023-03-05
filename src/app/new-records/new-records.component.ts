import { Component } from '@angular/core';

export interface Record {
  id: number;
  name: string;
}

@Component({
  selector: 'app-new-records',
  templateUrl: './new-records.component.html',
  styleUrls: ['./new-records.component.scss'],
})
export class NewRecordsComponent {
  records: Record[] = [
    { id: 1, name: 'Record 1' },
    { id: 2, name: 'Record 2' },
    { id: 3, name: 'Record 3' },
  ];

  deleteRecord(record: Record) {
    const index = this.records.findIndex((rec) => record.id === rec.id);
    this.records.splice(index, 1);
  }
}
