import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DrawerModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  visible: boolean = false;

  amberSwitch = {
    handle: {
      borderRadius: '4px',
    },
    colorScheme: {
      light: {
        topdrawer: {
         border : "3px solid red",
        },
        // handle: {
        //   checkedBackground: '{amber.50}',
        //   checkedHoverBackground: '{amber.100}',
        // },
      },
    },
  };
  // Original data
  dashboardOptions = [
    { name: 'Abacus', icon: 'pi pi-calculator' },
    { name: 'Academic Affairs', icon: 'pi pi-book' },
    { name: 'Admission & Registration', icon: 'pi pi-user-plus' },
    { name: 'Academic Management', icon: 'pi pi-briefcase' },
    { name: 'Activity Management', icon: 'pi pi-calendar' },
    { name: 'Advisor', icon: 'pi pi-users' },
    { name: 'akAdemia', icon: 'pi pi-graduation-cap' },
    { name: 'Alumni', icon: 'pi pi-users' },
    { name: 'Appointment', icon: 'pi pi-calendar-plus' },
    { name: 'Asset', icon: 'pi pi-box' },
    { name: 'AUE Resources', icon: 'pi pi-folder' },
    { name: 'Benchmark', icon: 'pi pi-chart-bar' },
    { name: 'Bookshop', icon: 'pi pi-shopping-cart' },
    { name: 'Career', icon: 'pi pi-briefcase' },
    { name: 'Cheds', icon: 'pi pi-file' },
    { name: 'Compliance', icon: 'pi pi-check-circle' },
    { name: 'Dean Dashboard', icon: 'pi pi-chart-line' },
    { name: 'Department Planning', icon: 'pi pi-sitemap' },
    { name: 'ELI', icon: 'pi pi-book' },
    { name: 'Event Management', icon: 'pi pi-calendar' },
    { name: 'e-Textbooks', icon: 'pi pi-book' },
    { name: 'Falcon Eye', icon: 'pi pi-eye' },
    { name: 'Faculty Analytics', icon: 'pi pi-chart-pie' },
    { name: 'Facility Management', icon: 'pi pi-building' },
    { name: 'Finance', icon: 'pi pi-dollar' },
    { name: 'Financial Aid', icon: 'pi pi-money-bill' },
    { name: 'Help', icon: 'pi pi-question-circle' },
    { name: 'HR', icon: 'pi pi-users' },
    { name: 'Humble Bee', icon: 'pi pi-bug' },
    { name: 'INSpect', icon: 'pi pi-search' },
    { name: 'InQuiry', icon: 'pi pi-question' },
    { name: 'IRC', icon: 'pi pi-comments' },
    { name: 'Institutional Research', icon: 'pi pi-chart-bar' },
    { name: 'Legal Office', icon: 'pi pi-balance-scale' },
    { name: 'Meeting Group', icon: 'pi pi-users' },
    { name: 'MOU Administration', icon: 'pi pi-file' },
    { name: 'MOM Planning', icon: 'pi pi-calendar' },
    { name: 'Online Exam (Moodle)', icon: 'pi pi-pencil' },
    { name: 'Procurement', icon: 'pi pi-shopping-bag' },
    { name: 'PPM', icon: 'pi pi-chart-line' },
    { name: 'QFE - CLO Mapping', icon: 'pi pi-map' },
    { name: 'Research & Promotion', icon: 'pi pi-search-plus' },
    { name: 'Risk Management', icon: 'pi pi-shield' },
    { name: 'Schedule', icon: 'pi pi-calendar' },
    { name: 'Search and Faculty Recruitment', icon: 'pi pi-search' },
    { name: 'Student', icon: 'pi pi-user' },
    { name: 'Success Center', icon: 'pi pi-trophy' },
    { name: 'Success Center (Campus)', icon: 'pi pi-home' },
    { name: 'Survey', icon: 'pi pi-chart-bar' },
    { name: 'TESBA', icon: 'pi pi-file' },
    { name: 'Tesoro', icon: 'pi pi-money-bill' },
    { name: 'View Online Databases', icon: 'pi pi-database' },
    { name: 'Workshop', icon: 'pi pi-wrench' },
  ];

  // Renamed for template access - this matches the variable name in the HTML
  rawDashboardOptions = this.dashboardOptions;

  showDrawer() {
    this.visible = true;
  }
}
