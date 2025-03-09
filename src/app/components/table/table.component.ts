import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
 

export interface PeriodicElement {
  start_date: Date;
  name: string;
  progress: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { start_date: new Date(), name: 'Hydrogen', progress: 'N/A' },
  { start_date: new Date(), name: 'Helium', progress: 'N/A' },
  { start_date: new Date(), name: 'Lithium', progress: 'N/A' },
  { start_date: new Date(), name: 'Beryllium', progress: 'N/A' },
  { start_date: new Date(), name: 'Boron', progress: 'N/A' },
  { start_date: new Date(), name: 'Carbon', progress: 'N/A' },
  { start_date: new Date(), name: 'Nitrogen', progress: 'N/A' },
  { start_date: new Date(), name: 'Oxygen', progress: 'N/A' },
  { start_date: new Date(), name: 'Fluorine', progress: 'N/A' },
  { start_date: new Date(), name: 'Neon', progress: 'N/A' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrl: './table.component.css',
  templateUrl: './table.component.html',
  imports: [MatTableModule,RouterLink,RouterModule],
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'start_date', 'edit', 'viewSurvey', 'reportData', 'copyLinkStatus', 'copyLinkButton',"progress"];
  dataSource = ELEMENT_DATA;
}
