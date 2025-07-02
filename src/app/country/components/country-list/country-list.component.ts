import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Country } from '@app/country/interfaces/countries.interface';

@Component({
  selector: 'country-list',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './country-list.component.html',
})
export class CountryList {
  public countries = input.required<Country[]>();
}
