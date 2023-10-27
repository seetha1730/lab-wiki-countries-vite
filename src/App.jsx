import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";

// import countriesData from 'https://ih-countries-api.herokuapp.com';
// import HomePage from "./pages/HomePage"; 
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
    
       <Routes>
      
        <Route
          path="/"
          element={ <HomePage/> }
        />
           <Route 
          path="/:countriesId" 
          element={ <CountryDetailsPage /> } 
        /> 

       
      </Routes> 
    </div>
   
  );
}

export default App;


