import CountryPicker from "../../components/CountryPicker";
import Highlight from "../../components/Highlight";
import Summary from "../../components/Summary";
import React,{useEffect, useState, useMemo} from "react";
import {getCountries,getReportByCountry} from "../../api";
import { sortBy } from 'lodash';
import {Container, Typography} from "@material-ui/core";
import moment from 'moment';



const Dashboard = () => {
  const [countriesData,setCountriesData] = useState([]);
  const [selectedCountryId,setSelectedCountryId] = useState('');
  const [report,setReport] = useState([]);

  
  useEffect(() => {
    getCountries().then((res) => {
    console.log({res: res});
    const countries = sortBy(res.data, 'Country');
    setCountriesData(countries);
    setSelectedCountryId('vn');
    });
  },[]);

  const handleOnChange = (e) =>{
    setSelectedCountryId(e.target.value);
  };

  useEffect(() =>{
    if(selectedCountryId){
    const selectedCountry = countriesData.find(
      (country) => country.ISO2 === selectedCountryId.toUpperCase());
  
    getReportByCountry(selectedCountry.Slug).then((res)=>{
      console.log('getReportByCountry', { res });
      res.data.pop();
      setReport(res.data);
    });
  }
  },[selectedCountryId, countriesData]);

  const summary = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      return [
        {
          title: 'TOTAL CASE',
          count: latestData.Confirmed,
          type: 'confirmed',
        },
        {
          title: 'RECOVERED CASE',
          count: latestData.Recovered,
          type: 'recovered',
        },
        {
          title: 'DEATHS CASE',
          count: latestData.Deaths,
          type: 'death',
        },
      ];
    }
    return [];
  }, [report]);


  return (
   <Container style={{marginTop: 20}}>
   <Typography>{moment().format('LLL')}</Typography>
   <CountryPicker
    countriesData={countriesData} 
    handleOnChange={handleOnChange}
    value={selectedCountryId}
    />
   <Highlight summary={summary}/>
   <Summary 
   countryId={selectedCountryId}
   report={report}/>
   </Container>
  )
}

export default Dashboard;
