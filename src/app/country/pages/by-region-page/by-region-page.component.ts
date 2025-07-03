import { Component, inject, signal, resource, computed } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { of } from 'rxjs';

import { CountryList } from '@app/country/components/country-list/country-list.component';
import { CountrySearch } from '@app/country/components/country-search/country-search.component';
import { CountryService } from '@app/country/services/country.service';

@Component({
  imports: [CountrySearch, CountryList],
  templateUrl: './by-region-page.component.html',
})
export default class ByRegionPage {
  private countryService = inject(CountryService);
  public query = signal<string>('');

  public regionResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);

      return this.countryService.searchByRegion(params.query);
    },
  });

  public countries = computed(() => this.regionResource.value() ?? []);
  public error = computed(() => this.regionResource.error());
  public isLoading = computed(() => this.regionResource.isLoading());
}
