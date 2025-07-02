import { Routes } from '@angular/router';

const ByCapitalPage = () =>
  import('./pages/by-capital-page/by-capital-page.component');

const CountryRoutes: Routes = [
  {
    path: 'by-capital',
    loadComponent: ByCapitalPage,
  },
];

export default CountryRoutes;
