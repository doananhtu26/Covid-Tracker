import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react';


const CountryPicker = ({value, handleOnChange,countriesData}) => {
 return (
  <FormControl>
    <InputLabel htmlFor="country-selector" shrink>Country</InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: 'country',
          id: 'country-selector',
        }}
      >
        {
          countriesData.map((country)=>{
            return (
            <option 
             key={country.ISO2} 
             value={country.ISO2.toLowerCase()}>
             {country.Country}
            </option>
            );
          })
        }
        </NativeSelect>
        <FormHelperText>Select Country</FormHelperText>
    </FormControl>
  )
}
export default CountryPicker;
