import { Routes } from '@angular/router';
import CountryLayout from './layouts/CountryLayout/CountryLayout.component';

const ByCapitalPage = () =>
  import('./pages/by-capital-page/by-capital-page.component');
const ByCountryPage = () =>
  import('./pages/by-country-page/by-country-page.component');
const ByRegionPage = () =>
  import('./pages/by-region-page/by-region-page.component');

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
        path: 'by-country',
        loadComponent: ByCountryPage,
      },
      {
        path: 'by-region',
        loadComponent: ByRegionPage,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default CountryRoutes;
