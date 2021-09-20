import React from 'react';
import CountryPicker from "./components/CountryPicker";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import {useEffect, useState} from "react";
import covidApi from "./api/covidApi";
function App() {
  const [countriesData,setCountriesData] = useState([]);

  useEffect(() =>{
    const getAllCountries = async () =>{
      const countriesData = await covidApi.getCountries();
      setCountriesData(countriesData.data);
    }
    getAllCountries();
    
  },[]);

  const handleOnChange = (e) =>{
    console.log({e});
  }

  return (
   <div>
   <CountryPicker countriesData={countriesData} handleOnChange={handleOnChange}/>
   <Highlight/>
   <Summary/>
   </div>
  )
}

export default App;
