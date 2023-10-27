import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetailsPage = () => {
  const { countriesId } = useParams();
  console.log('countriesId -->', countriesId);
  const [countryDetails, setCountryDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Fetch the country details
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${countriesId}`)
    .then((response) => {
      setIsLoading(false)
      setCountryDetails(response.data);
      

    })
    
      .catch((error) => {
        console.error(`Error fetching country details for ID ${countriesId}:`, error);
      });
  }, [countriesId]);

  // Check if countryDetails is null or undefined
  if (isLoading) {
    return <div>Loading...</div>;
  }
else
  return (
    <div className="country-details">
     
      <h1 className="mt-2">Country Details</h1>

     
      {countryDetails && (
        <div >
          <h2 className="mt-2">    
           <img 
                src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
                alt={`${countryDetails.name.common} Flag`}/>
                {countryDetails.name.common}</h2>
          <Link to="/">Back to Home</Link>
          <div className='d-flex justify-content-center align-items-center border-bottom py-3'><p className='col-6'>Capital:</p> <p className='col-6'>{countryDetails.capital}</p></div>
          <div className='d-flex justify-content-center align-items-center  border-bottom py-3'><p className='col-6'>area:</p> <p className='col-6'>{countryDetails.area} Km²</p></div>
          <div className='d-flex justify-content-center  border-bottom py-3'><p className='col-6'>Borders:</p>  <ul className='col-6'>
            {countryDetails.borders.map((borderCountry) => (
              <li key={borderCountry}>
                <Link to={`/${borderCountry}`}>{borderCountry}</Link>
              </li>
             ))}
          </ul>
          </div>
        
          </div>
      )}

     
    </div>
  
  )
}

export default CountryDetailsPage;
