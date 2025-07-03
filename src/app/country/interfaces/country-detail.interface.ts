import { Country } from './countries.interface';

export interface CountryDetail extends Country {
  area: number;
  borders: string[];
  carSigns: string[];
  coatOfArms: CoatOfArms;
  continents: string[];
  coordinates: Coordinates;
  currencies: Currency[];
  demonyms: Demonyms;
  drivingSide: string;
  fifa: string;
  gini?: number;
  independent: boolean;
  landlocked: boolean;
  languages: Language[];
  maps: Maps;
  nativeName: string;
  officialName: string;
  phoneCode: string;
  postalCode?: PostalCode;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  unMember: boolean;
}

export interface Demonyms {
  male: string;
  female: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}
