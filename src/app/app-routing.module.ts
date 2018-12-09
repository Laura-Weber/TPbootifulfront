import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });
