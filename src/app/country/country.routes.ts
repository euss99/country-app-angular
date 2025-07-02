import { Routes } from '@angular/router';
import CountryLayout from './layouts/CountryLayout/CountryLayout.component';

const ByCapitalPage = () =>
  import('./pages/by-capital-page/by-capital-page.component');

const CountryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        loadComponent: ByCapitalPage,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ]
  },
];

export default CountryRoutes;
