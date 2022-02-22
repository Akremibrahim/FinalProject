import React, { useEffect, useState } from 'react';
import { MenuItem,FormControl,Select } from '@mui/material';
import './App.css';

function App() {
  const [countries, setCountries] = useState ([]);
  const [country, setCountry] = useState("Worldwide")
  
  useEffect(() => {
  const getCountriesData = async () => {
    await fetch ("https://disease.sh/v3/covid-19/countries")
     .then((response) => response.json())
     .then((data) => {

       const countries = data.map ((country) => ({
          name: country.country,
          value:country.countryInfo.iso2,
        }));
  
        setCountries(countries);
      });
    };
    getCountriesData();

  }, []);
 
  return (
    <div className="app">
      <div className='app__header'>
          
        <h2>Covid 19 Tracker</h2>

        <FormControl class="app__dropdown">
          <Select variant="outlined" value={country} >
          <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => ( 
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
           
          </Select>
        </FormControl>
      </div>
    
    </div>
  );
}

export default App;
