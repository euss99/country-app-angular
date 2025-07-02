import { Country } from '@app/country/interfaces/countries.interface';
import { RESTCountry } from '@app/country/interfaces/rest-countries.interface';

export class CountryMapper {
  static toCountry(country: RESTCountry): Country {
    return {
      name: country.name.common,
      capital: country.capital.join(', '),
      flag: country.flags.png,
      icon: country.flag,
      population: country.population,
    };
  }

  static toCountries(countries: RESTCountry[]): Country[] {
    return countries.map((country) => this.toCountry(country));
  }
}
