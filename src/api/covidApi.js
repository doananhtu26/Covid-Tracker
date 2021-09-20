import axios from "axios";

const covidApi = {
  getCountries: () =>{
  return axios.get(`https://api.covid19api.com/countries
`);
  },

  getReportByCountry: (country) =>{
    return axios.get(`https://api.covid19api.com/dayone/country/${country}`);
  }
}
export default covidApi;