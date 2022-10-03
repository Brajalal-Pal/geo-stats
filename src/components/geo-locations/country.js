import React, { useEffect, useState } from "react";
import { LocationService } from "../../services/location-service";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Country = (props) => {
  const [continent, SetContinent] = useState(useParams().continent);
  const [countries, SetCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let result = await LocationService.getCountriesByContinent(continent);
      SetCountries(result.data.data);
    }
    fetchData();
  }, [continent]);

  return (
    <div className="container mt-3">
      <div className="row m-3">
        <div className="col">
          <p className="h3 fw-bold text-success">{continent}</p>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae ratione aspernatur error rem aliquam
            ullam iste dolorem esse quo, quis nam nulla excepturi nihil obcaecati voluptatem fugiat dignissimos provident?
          </p>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-hover text-center table-striped">
              <thead className="bg-success text-white">
                <tr>
                  <th>#</th>
                  <th>Country</th>
                  <th>Sub-Region</th>
                  <th>Capital</th>
                  <th>Currency</th>
                  <th>Area</th>
                  <th>Flag</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country) => (
                  <tr key={country.cca3}>
                    <td>{country.cca3}</td>
                    <td>
                      <Link className="text-decoration-none fw-bold text-success" to={`/countries/${country.name.common}`}>
                        {country.name.common}
                      </Link>
                    </td>
                    <td>{country.subregion}</td>
                    <td>{country.capital ? country.capital[0] : undefined}</td>
                    <td>{LocationService.getCurrency(country.currencies)}</td>
                    <td>{country.area}</td>
                    <td>
                      <img src={country.flags.png} width="100" alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button className="btn btn-primary mb-5 w-auto">Previouse Page</button>
      </div>
    </div>
  );
};
