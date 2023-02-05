import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-hands-table',
  templateUrl: './hands-table.component.html',
  styleUrls: ['./hands-table.component.scss'],
})
export class HandsTableComponent implements OnInit {
  public hotInstance!: Handsontable;
  public data = [
    {
      id: 1,
      name: 'Nike Air Zoom Pegasus 38 Running Shoes',
      description:
        'The Nike Air Zoom Pegasus 38 Running Shoes are designed for both comfort and performance. ',
      madeIn: 'Vietnam',
      productionDate: 'January 2021',
    },
    {
      id: 2,
      name: 'Adidas Ultraboost 20 Running Shoes',
      description:
        'The Adidas Ultraboost 20 Running Shoes are designed for a natural footstrike and a responsive ride.',
      madeIn: 'Vietnam',
      productionDate: 'February 2021',
    },
    {
      id: 3,
      name: 'Under Armour HOVR Phantom Running Shoes',
      description:
        'The Under Armour HOVR Phantom Running Shoes are designed for a smooth, energy-returning ride.',
      madeIn: 'Vietnam',
      productionDate: 'March 2021',
    },
    {
      id: 4,
      name: 'Puma Calibrate Running Shoes',
      description:
        'The Puma Calibrate Running Shoes are designed for a comfortable and supportive ride.',
      madeIn: 'Indonesia',
      productionDate: 'April 2021',
    },
    {
      id: 5,
      name: 'New Balance Fresh Foam 1080v11 Running Shoes',
      description:
        'The New Balance Fresh Foam 1080v11 Running Shoes are designed for a plush, comfortable ride.',
      madeIn: 'Vietnam',
      productionDate: 'May 2021',
    },
    {
      id: 6,
      name: 'Asics Gel-Kayano 26 Running Shoes',
      description:
        'The Asics Gel-Kayano 26 Running Shoes are designed for a comfortable and stable ride.',
      madeIn: 'Vietnam',
      productionDate: 'June 2021',
    },
    {
      id: 7,
      name: 'Reebok Forever Floatride Energy 2.0 Running Shoes',
      description:
        'The Reebok Forever Floatride Energy 2.0 Running Shoes are designed for a lightweight and responsive ride.',
      madeIn: 'Vietnam',
      productionDate: 'July 2021',
    },
  ];
  public colHeaders = [
    'Id',
    'Name',
    'Description',
    'Made In',
    'Production Date',
  ];

  licenseKey = 'non-commercial-and-evaluatio';

  ngOnInit(): void {
    this.generateTable();
  }

  private generateTable() {
    this.hotInstance = new Handsontable(
      document.getElementById('hot-table') as HTMLElement,
      {
        data: this.data,
        colHeaders: ['Id', 'Name', 'Description', 'Made In', 'Production Date'],
        rowHeaders: true,
        manualColumnResize: true,
        manualRowResize: true,
        licenseKey: 'non-commercial-and-evaluatio',
      }
    );
  }
}
