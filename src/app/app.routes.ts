import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CvViewerComponent } from './pages/cv-viewer/cv-viewer.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cv-viewer', component: CvViewerComponent },
  { path: '**', redirectTo: '' }
];
