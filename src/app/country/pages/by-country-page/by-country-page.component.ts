import { Component } from '@angular/core';

import { CountrySearch } from '@app/country/components/country-search/country-search.component';
import { CountryList } from '@app/country/components/country-list/country-list.component';

@Component({
  selector: 'by-country-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './by-country-page.component.html',
})
export default class ByCountryPage {
  onSearchByCountry(term: string) {
    console.log('Desde ByCountryPage', term);
  }
}
