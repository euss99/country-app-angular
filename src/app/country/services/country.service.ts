import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map, Observable } from 'rxjs';

import { Country } from '@app/country/interfaces/countries.interface';
import { CountryMapper } from '@app/country/mappers/country.mapper';
import { environment } from '@environments/environment';
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
      .pipe(map((countries) => CountryMapper.toCountries(countries)));
  }
}
