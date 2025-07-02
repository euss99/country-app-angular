import { Component } from '@angular/core';

import { CountryList } from '@app/country/components/country-list/country-list.component';
import { CountrySearch } from '@app/country/components/country-search/country-search.component';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPage {
  onSearchByCapital(term: string) {
    console.log('Desde ByCapitalPage', term);
  }
}
