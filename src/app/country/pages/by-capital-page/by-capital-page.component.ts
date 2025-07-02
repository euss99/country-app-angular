import { Component, inject, signal } from '@angular/core';

import { Country } from '@app/country/interfaces/countries.interface';
import { CountryList } from '@app/country/components/country-list/country-list.component';
import { CountrySearch } from '@app/country/components/country-search/country-search.component';
import { CountryService } from '@app/country/services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPage {
  private countryService = inject(CountryService);

  public countries = signal<Country[]>([]);
  public isLoading = signal<boolean>(false);
  public hasError = signal<boolean>(false);

  onSearchByCapital(term: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.countryService.searchByCountry(term).subscribe({
      next: (countries) => {
        this.countries.set(countries);
      },
      error: (error) => {
        this.isLoading.set(false);
        this.hasError.set(true);
      },
      complete: () => {
        this.isLoading.set(false);
        this.hasError.set(false);
      },
    });
  }
}
