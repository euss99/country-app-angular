import { RESTCountry } from '@app/country/interfaces/rest-countries.interface';
import { CountryDetail, Currency, Language } from '@app/country/interfaces/country-detail.interface';

export class CountryDetailMapper {
  static toCountryDetail(country: RESTCountry): CountryDetail {
    return {
      // Información básica (heredada de Country)
      name: country.name.common,
      capital: country.capital.join(', '),
      flag: country.flags.png,
      icon: country.flag,
      population: country.population,
      code: country.cca2,

      // Información básica extendida
      officialName: country.name.official,
      nativeName: this.getNativeName(country.name.nativeName),

      // Información geográfica
      region: country.region,
      subregion: country.subregion,
      area: country.area,
      coordinates: {
        latitude: country.latlng[0],
        longitude: country.latlng[1],
      },
      landlocked: country.landlocked,
      borders: country.borders,

      // Información demográfica
      demonyms: {
        male: country.demonyms.eng?.m || '',
        female: country.demonyms.eng?.f || '',
      },

      // Información económica
      currencies: this.mapCurrencies(country.currencies),
      gini: country.gini ? Object.values(country.gini)[0] : undefined,

      // Información política
      independent: country.independent,
      unMember: country.unMember,
      status: country.status,

      // Información cultural
      languages: this.mapLanguages(country.languages),
      timezones: country.timezones,
      continents: country.continents,

      // Información de transporte
      drivingSide: country.car.side,
      carSigns: country.car.signs,

      // Información de comunicación
      phoneCode: country.idd.root + (country.idd.suffixes[0] || ''),
      topLevelDomain: country.tld,

      // Información de mapas
      maps: {
        googleMaps: country.maps.googleMaps,
        openStreetMaps: country.maps.openStreetMaps,
      },

      // Información adicional
      fifa: country.fifa,
      coatOfArms: {
        png: country.coatOfArms.png,
        svg: country.coatOfArms.svg,
      },
      startOfWeek: country.startOfWeek,
      postalCode: country.postalCode,
    };
  }

  private static getNativeName(nativeName: any): string {
    if (!nativeName) return '';
    const firstLanguage = Object.keys(nativeName)[0];
    return nativeName[firstLanguage]?.common || '';
  }

  private static mapCurrencies(currencies: any): Currency[] {
    if (!currencies) return [];

    return Object.entries(currencies).map(([code, currency]: [string, any]) => ({
      code,
      name: currency.name,
      symbol: currency.symbol,
    }));
  }

  private static mapLanguages(languages: any): Language[] {
    if (!languages) return [];

    return Object.entries(languages).map(([code, name]: [string, any]) => ({
      code,
      name: name as string,
      nativeName: name as string, // Simplificado, en un caso real necesitarías más datos
    }));
  }
}
