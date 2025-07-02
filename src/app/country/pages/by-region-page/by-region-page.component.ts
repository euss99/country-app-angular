import { Component } from '@angular/core';

import { CountrySearch } from '@app/country/components/country-search/country-search.component';
import { CountryList } from '@app/country/components/country-list/country-list.component';

@Component({
  selector: 'by-region-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './by-region-page.component.html',
})
export default class ByRegionPage {
  onSearchByRegion(term: string) {
    console.log('Desde ByRegionPage', term);
  }
}
