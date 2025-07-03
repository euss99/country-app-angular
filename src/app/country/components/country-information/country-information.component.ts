import { Component, input } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CountryDetail } from '@app/country/interfaces/country-detail.interface';

@Component({
  selector: 'country-information',
  imports: [RouterLink, PercentPipe],
  templateUrl: './country-information.component.html',
})
export class CountryInformation {
  public country = input.required<CountryDetail>();

  public formatArea(area: number): string {
    if (area < 1000) return `${area} km²`;
    if (area < 1000000) return `${(area / 1000).toFixed(1)}k km²`;
    return `${(area / 1000000).toFixed(1)}M km²`;
  }

  public formatPopulation(population: number): string {
    if (population < 1000) return population.toString();
    if (population < 1000000) return `${(population / 1000).toFixed(1)}k`;
    if (population < 1000000000) return `${(population / 1000000).toFixed(1)}M`;
    return `${(population / 1000000000).toFixed(1)}B`;
  }

  public formatCoordinates(lat: number, lng: number): string {
    const latDir = lat >= 0 ? 'N' : 'S';
    const lngDir = lng >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(2)}°${latDir}, ${Math.abs(lng).toFixed(2)}°${lngDir}`;
  }

  public getLanguagesText(): string {
    return this.country().languages.map(l => l.name).join(', ');
  }
}
