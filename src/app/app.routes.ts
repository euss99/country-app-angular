import { Routes } from '@angular/router';

import HomePage from '@app/shared/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
