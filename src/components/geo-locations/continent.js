import React, { useEffect, useState } from "react";
import { LocationService } from "../../services/location-service";
import { Link } from "react-router-dom";

export const Continent = () => {
  const [continents, SetContinents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let result = await LocationService.getContinentList();
      SetContinents(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row m-3">
        <div className="col">
          <p className="h3 fw-bold text-success">Continent List</p>
          <p className="fst-italic">
            A continent is any of several large landmasses. Generally identified by convention rather than any strict
            criteria, up to seven geographical regions are commonly regarded as continents. Ordered from largest in area to
            smallest, these seven regions are: Asia, Africa, North America, South America, Antarctica, Europe, and
            Australia.[1] Variations with fewer continents may merge some of these, for example America, Eurasia, or
            Afro-Eurasia are sometimes treated as single continents, which can bring the total number as low as four.
            Zealandia, a largely submerged mass of continental crust, has also been described as a continent.
          </p>
        </div>
        <div className="row" v-if="!loading">
          <div className="col">
            <table className="table table-hover text-center table-striped">
              <thead className="bg-success text-white">
                <tr>
                  <th>#</th>
                  <th>Continent</th>
                  <th>Population</th>
                  <th>Area</th>
                  <th>Density</th>
                  <th>World Population Share</th>
                </tr>
              </thead>
              <tbody>
                {continents.map((continent) => (
                  <tr key={continent.abr}>
                    <td>{continent.abr}</td>
                    <td>
                      <Link className="text-decoration-none fw-bold text-success" to={`/continents/${continent.name}`}>
                        {continent.name}
                      </Link>
                    </td>
                    <td>{continent.population}</td>
                    <td>{continent.area}</td>
                    <td>{continent.density}</td>
                    <td>{continent.populationShare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
