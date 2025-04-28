import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { 
    path: 'register', 
    component: RegisterComponent,
    title: 'Inscription'
  },
  { 
    path: '', 
    redirectTo: '/register', 
    pathMatch: 'full' 
  }
];
