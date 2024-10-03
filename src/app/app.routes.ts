import { Routes } from '@angular/router';
import { HomeContentComponent } from './public/components/home-content/home-content.component';
import { PageNotFoundComponent } from './public/components/page-not-found/page-not-found.component';
import {MentalStateExamComponent} from './nursing/pages/mental-state-exam/mental-state-exam.component';

export const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'mental-state-exams', component: MentalStateExamComponent },
  { path: '**', component: PageNotFoundComponent }
];
