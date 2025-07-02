import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { Country } from '@app/country/interfaces/countries.interface';
import { RESTCountry } from '@app/country/interfaces/rest-countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  public searchByCountry(query: string): Observable<Country[]> {
    const lowerQuery = query.toLowerCase();
    const url = `${environment.COUNTRY_API_URL}/capital/${lowerQuery}`;

    return this.http
      .get<RESTCountry[]>(url)
      .pipe(map((countries) => this.mapCountries(countries)));
  }

  private mapCountry(country: RESTCountry): Country {
    return {
      name: country.name.common,
      capital: country.capital[0],
      flag: country.flags.png,
      icon: country.flag,
      population: country.population,
    };
  }

  private mapCountries(countries: RESTCountry[]): Country[] {
    return countries.map((country) => this.mapCountry(country));
  }
}
