import React, { useState, useEffect } from "react";
import { LocationService } from "../../services/location-service";
import { useParams, useNavigate } from "react-router-dom";
import { Loader } from "../../utility/loader";

const CountryData = (props) => {
    const { countryName, country } = props;
    const navigate = useNavigate();

    return (
        <React.Fragment>
            {country && country.continents ? (
                <div class="container mt-3">
                    <div class="row m-3">
                        <div class="col">
                            <p class="h3 fw-bold text-success">
                                {country.continents
                                    ? `${country.continents.map((c) => c).join(",")} -> ${countryName} (${country.cca3})`
                                    : null}
                            </p>
                            <p class="fst-italic">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae ratione aspernatur
                                error rem aliquam ullam iste dolorem esse quo, quis nam nulla excepturi nihil obcaecati
                                voluptatem fugiat dignissimos provident?
                            </p>
                        </div>

                        <div class="row" v-if="!loading">
                            <div class="col-md-6">
                                <p class="h3 fw-bold text-info">Flag</p>
                                <div class="row">
                                    <img src={country.flags.svg} alt="" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <p class="h3 fw-bold text-info">Country Profile</p>

                                <ul class="list-group">
                                    <li class="list-group-item">Official Name: {country.name.official}</li>
                                    <li class="list-group-item">
                                        Currencies: {LocationService.getCurrency(country.currencies)}
                                    </li>
                                    <li class="list-group-item">Time Zones: {country.timezones.map((t) => t).join(",")}</li>
                                    <li class="list-group-item">Region: {country.region}</li>
                                    <li class="list-group-item">Sub-region: {country.subregion}</li>
                                    <li class="list-group-item">Continents: {country.continents.map((c) => c).join(",")}</li>
                                    <li class="list-group-item">Languages: {Object.values(country.languages).join(",")}</li>
                                    <li class="list-group-item">Population: {country.population}</li>
                                    <li class="list-group-item">Area: {country.area}</li>
                                    <li class="list-group-item">Capital: {Object.values(country.capital).join(",")}</li>
                                </ul>
                            </div>
                        </div>
                        <button class="btn btn-primary mb-5 w-auto" onClick={() => navigate(-1)}>
                            Previouse Page
                        </button>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    );
};
export const CountryDetail = () => {
    const [country, setCountry] = useState({});
    const [loading, setLoading] = useState(false);
    const [countryName, setCountryName] = useState(useParams().country);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const result = await LocationService.getCountryDetails(countryName);

            setCountry(result.data.data[0]);
            setLoading(false);
        }
        fetchData();
    }, [countryName]);

    return (
        <React.Fragment>{loading ? <Loader /> : <CountryData countryName={countryName} country={country} />}</React.Fragment>
    );
};
