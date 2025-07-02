import { Component, input } from '@angular/core';

import { Country } from '@app/country/interfaces/countries.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.component.html',
})
export class CountryList {
  public countries = input.required<Country[]>();
}
