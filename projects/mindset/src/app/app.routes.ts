import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./core/home.component')},
    { path: 'cerca-principio', loadComponent: () => import('./features/cerca-principio.component')},
    { path: 'contradiction-table', loadComponent: () => import('./features/contradiction-table.component')},
    { path: 'calcolo', loadComponent: () => import('./features/calcolo.component')},
    { path: 'weather', loadComponent: () => import('./features/weather-demo.component')},
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];
