import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map, Observable, catchError, throwError } from 'rxjs';

import { Country } from '@app/country/interfaces/countries.interface';
import { CountryMapper } from '@app/country/mappers/country.mapper';
import { environment } from '@environments/environment';
import { RESTCountry } from '@app/country/interfaces/rest-countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  public searchByCapital(query: string): Observable<Country[]> {
    return this.searchBy(query, 'capital');
  }

  public searchByCountry(query: string): Observable<Country[]> {
    return this.searchBy(query, 'name');
  }

  public searchByRegion(query: string): Observable<Country[]> {
    return this.searchBy(query, 'region');
  }

  public searchByCode(query: string): Observable<Country> {
    const countries = this.searchBy(query, 'alpha');

    return countries.pipe(
      map((countries) => countries[0]),
      catchError(() =>
        throwError(() => new Error(`Don't found any country with that ${query}`)),
      ),
    );
  }

  private searchBy = (
    query: string,
    type: 'capital' | 'name' | 'region' | 'alpha'
  ): Observable<Country[]> => {
    const lowerQuery = query.toLowerCase();
    const url = `${environment.COUNTRY_API_URL}/${type}/${lowerQuery}`;

    return this.http
      .get<RESTCountry[]>(url)
      .pipe(
        map((restCountries) => CountryMapper.toCountries(restCountries)),
        catchError(() =>
          throwError(() => new Error(`Don't found any country with that ${type}`)),
        ),
      );
  };
}
