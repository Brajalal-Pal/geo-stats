import axios from "axios";

export class LocationService {
  static getContinentList() {
    return axios.get(`http://localhost:5000/continents`);
  }

  static getCountriesByContinent(continent) {
    return axios.get(`http://localhost:5000/countries?continent=${continent}&page=1&limit=60`);
  }

  static getCurrency(currencies) {
    if (currencies && Object.entries(currencies)) {
      const entries = Object.entries(currencies);
      const data = entries.map(([name, symbol]) => {
        return `${symbol.name} (${symbol.symbol})`;
      });
      return data.join(",");
    }
    return null;
  }

  static getCountryDetails(countryName) {
    return axios.get(`http://localhost:5000/countries?country=${countryName}`);
  }
}
