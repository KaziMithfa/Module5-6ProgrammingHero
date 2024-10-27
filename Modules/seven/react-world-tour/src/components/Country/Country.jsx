import { useState } from "react";
import "./Country.css";
import CountryDetail from "../Countries/CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisisted] = useState(false);

  const handleVisited = () => {
    setVisisted(!visited);
  };

  //console.log(handleVisitedCountry);

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "red" }}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>population: {population}</p>
      <p>area: {area}</p>
      <p>
        <small> Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />

      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited this country." : "I want to visit "}

      <hr />

      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
