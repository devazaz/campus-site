import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

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

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    RouterModule,
    MatPaginatorModule,
    TabsModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'start_date',
    'edit',
    'viewSurvey',
    'reportData',
    'copyLinkStatus',
    'copyLinkButton',
    'progress',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tabs: { title: string; value: number; content: string }[] = [
    { title: 'General', value: 0, content: 'Tab 1 Content' },
    { title: 'Election', value: 1, content: 'Tab 2 Content' },
    { title: 'Nomination', value: 2, content: 'Tab 3 Content' },
    { title: 'University Survey', value: 3, content: 'Tab 4 Content' },
  ];

  activeTabValue: number = 0; // Track the active tab

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.updateTableData(this.activeTabValue); // Initial table data
  }

  // Handle tab change
  onTabChange(event: { index: number }) {
    this.activeTabValue = event.index; // Extract the index from the event object
    this.updateTableData(this.activeTabValue);
  }

  // Update table data based on active tab
  updateTableData(activeTabValue: number) {
    console.log('activeTabValue: ', activeTabValue);
    let filteredData: PeriodicElement[];
    switch (activeTabValue) {
      case 0: // General
        filteredData = ELEMENT_DATA // First 3 elements
        break;
      case 1: // Election
        filteredData = ELEMENT_DATA.slice(3, 6); // Next 3 elements
        break;
      case 2: // Nomination
        filteredData = ELEMENT_DATA.slice(6, 9); // Next 3 elements
        break;
      case 3: // University Survey
        filteredData = ELEMENT_DATA.slice(9); // Last element
        break;
      default:
        filteredData = ELEMENT_DATA; // Fallback
    }
    this.dataSource.data = filteredData; // Update table data
  }
}