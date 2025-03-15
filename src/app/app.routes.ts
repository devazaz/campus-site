import { Routes } from '@angular/router';
import { SurveyInformationComponent } from './components/survey-information/survey-information.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
  {
    path: 'login',
    component: LoginComponent,
  },
];
