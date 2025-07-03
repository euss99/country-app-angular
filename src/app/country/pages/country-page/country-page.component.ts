import { ActivatedRoute } from '@angular/router';
import { Component, computed, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { toSignal, rxResource } from '@angular/core/rxjs-interop';

import { map, of } from 'rxjs';

import { CountryService } from '@app/country/services/country.service';
import { NotFound } from '@app/shared/components/not-found/not-found.component';
import { CountryInformation } from '@app/country/components/country-information/country-information.component';
import { CountryDetail } from '@app/country/interfaces/country-detail.interface';

@Component({
  imports: [JsonPipe, NotFound, CountryInformation],
  templateUrl: './country-page.component.html',
})
export default class CountryPage {
  private countryService = inject(CountryService);
  private activatedRoute = inject(ActivatedRoute);

  public countryCode = toSignal(
    this.activatedRoute.params.pipe(map(params => params['code'])),
    { initialValue: '' }
  );

  public countryResource = rxResource({
    params: () => ({ code: this.countryCode() }),
    stream: ({ params }) => {
      if (!params.code) return of(null);

      return this.countryService.searchByCodeDetail(params.code);
    },
  });

  public country = computed(() => this.countryResource.value());
  public error = computed(() => this.countryResource.error());
  public isLoading = computed(() => this.countryResource.isLoading());
}
