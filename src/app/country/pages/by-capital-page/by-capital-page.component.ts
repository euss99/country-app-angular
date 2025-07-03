import { Component, inject, signal, computed } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { of } from 'rxjs';

import { CountryList } from '@app/country/components/country-list/country-list.component';
import { CountrySearch } from '@app/country/components/country-search/country-search.component';
import { CountryService } from '@app/country/services/country.service';

@Component({
  imports: [CountrySearch, CountryList],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPage {
  private countryService = inject(CountryService);
  public query = signal<string>('');

  public countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);

      return this.countryService.searchByCapital(params.query);
    },
  });

  public countries = computed(() => this.countryResource.value() ?? []);
  public error = computed(() => this.countryResource.error());
  public isLoading = computed(() => this.countryResource.isLoading());
}
