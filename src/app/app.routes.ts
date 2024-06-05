import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage)
  },
  {
    path: 'page-two',
    loadComponent: () => import('./page-two/page-two.page').then( m => m.PageTwoPage)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];
