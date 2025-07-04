import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map, Observable, catchError, throwError } from 'rxjs';

import { Country } from '@app/country/interfaces/countries.interface';
import { CountryDetail } from '@app/country/interfaces/country-detail.interface';
import { CountryMapper } from '@app/country/mappers/country.mapper';
import { CountryDetailMapper } from '@app/country/mappers/country-detail.mapper';
import { environment } from '@environments/environment';
import { RESTCountry } from '@app/country/interfaces/rest-countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCache = new Map<string, Observable<Country[]>>();

  public searchByCapital(query: string): Observable<Country[]> {
    return this.searchWithCache(query, 'capital');
  }

  public searchByCountry(query: string): Observable<Country[]> {
    return this.searchWithCache(query, 'name');
  }

  public searchByRegion(query: string): Observable<Country[]> {
    return this.searchWithCache(query, 'region');
  }

  public searchByCodeDetail(query: string): Observable<CountryDetail> {
    const lowerQuery = query.toLowerCase();
    const url = `${environment.COUNTRY_API_URL}/alpha/${lowerQuery}`;

    return this.http.get<RESTCountry[]>(url).pipe(
      map((restCountries) =>
        CountryDetailMapper.toCountryDetail(restCountries[0]),
      ),
      catchError(() =>
        throwError(
          () => new Error(`Don't found any country with that code ${query}`),
        ),
      ),
    );
  }

  private searchBy = (
    query: string,
    type: 'capital' | 'name' | 'region' | 'alpha',
  ): Observable<Country[]> => {
    const lowerQuery = query.toLowerCase();
    const url = `${environment.COUNTRY_API_URL}/${type}/${lowerQuery}`;

    return this.http.get<RESTCountry[]>(url).pipe(
      map((restCountries) => CountryMapper.toCountries(restCountries)),
      catchError(() =>
        throwError(
          () => new Error(`Don't found any country with that ${type}`),
        ),
      ),
    );
  };

  private searchWithCache(
    query: string,
    type: 'capital' | 'name' | 'region',
  ): Observable<Country[]> {
    const cached = this.queryCache.get(query);
    if (cached) return cached;

    const result = this.searchBy(query, type);
    this.queryCache.set(query, result);
    return result;
  }
}
