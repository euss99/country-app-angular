import { Routes } from '@angular/router';

import CountryLayout from '@app/country/layouts/CountryLayout/CountryLayout.component';

const ByCapitalPage = () =>
  import('@app/country/pages/by-capital-page/by-capital-page.component');
const ByCountryPage = () =>
  import('@app/country/pages/by-country-page/by-country-page.component');
const ByRegionPage = () =>
  import('@app/country/pages/by-region-page/by-region-page.component');
const CountryPage = () =>
  import('@app/country/pages/country-page/country-page.component');

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
        path: 'by/:code',
        loadComponent: CountryPage,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default CountryRoutes;
