import { Routes } from '@angular/router';
import { SurveyInformationComponent } from './components/survey-information/survey-information.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'survey',
    pathMatch: 'full',
  },
  {
    path: 'survey',
    component: LayoutComponent,
  },
  {
    path: 'survey-information',
    component: SurveyInformationComponent,
  },
];
