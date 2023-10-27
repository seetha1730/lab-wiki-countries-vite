
import { Link } from "react-router-dom";   
 import { useEffect,useState } from "react";
 import axios from "axios";


 function HomePage() {
   const [countries, setCountries] = useState([]);
 
   useEffect(() => {
    
     axios.get("https://ih-countries-api.herokuapp.com/countries")
     .then((response) => {
      setCountries(response.data);
    })
       .catch((error) => {
         console.error("Error fetching data:", error);
       });
   }, []); 
 
   return (
     <div>
      <h1 className="my-5">WikiCountries: Your Guide to the World</h1>
      <div className="countries">
       {countries.map((country) => (
        
          
           <p key={country._id} >
             <Link to={`/${country.alpha3Code}`}>
             <img 
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.common} Flag`}
              />{' '}{country.name.common}
             </Link>
           </p>
        
       ))}
       </div>
     </div>
   );
 }
 
 export default HomePage;
 