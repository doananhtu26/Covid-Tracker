import React from 'react';
import CountryPicker from "./components/CountryPicker";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import {useEffect, useState, useMemo} from "react";
import {getCountries} from "./api";
import {getReportByCountry} from "./api";

function App() {
  const [countriesData,setCountriesData] = useState([]);
  const [selectedCountryId,setSelectedCountryId] = useState('');
  const [report,setReport] = useState([]);

  
  useEffect(() => {
    getCountries().then((res) => {
      console.log({res: res});
      setCountriesData(res.data);

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
      setReport(res.data)
    });
  }
  },[selectedCountryId, countriesData]);

  const summary = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      return [
        {
          title: 'Số ca nhiễm',
          count: latestData.Confirmed,
          type: 'confirmed',
        },
        {
          title: 'Khỏi',
          count: latestData.Recovered,
          type: 'recovered',
        },
        {
          title: 'Tử vong',
          count: latestData.Deaths,
          type: 'death',
        },
      ];
    }
    return [];
  }, [report]);


  return (
   <div>
   <CountryPicker
    countriesData={countriesData} 
    handleOnChange={handleOnChange}
    value={selectedCountryId}
    />
   <Highlight summary={summary}/>
   <Summary report={report}/>
   </div>
  )
}

export default App;
