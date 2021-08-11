import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchBar } from './searchBar/index';

function StationList() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

// similar to "componentDidMount" and "componentDidUpdate"
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://api.jcdecaux.com/vls/v1/stations?apiKey=686e9980efabf0d683569beb99aa243b09fe5513',
            );

            setData(result.data);
            console.log(result.data);
        };
        fetchData();
    }, [])

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearchTerm(value)
    }

    console.log(searchTerm);

    return (
        <div className="listing-station">
            <h2>Liste des Stations de vélo</h2>
            <SearchBar />
            {/* <div className="input-group mb-3">
                <input type="text" name="searchBar" id="searchBar" className="form-control-3 mb-3 ms-3 ps-2" placeholder="Rechercher une ville" onChange={handleSearchTerm} />
            </div> */}
            <div className="container mb-5 list-nantes">
                <div className="container mb-4">
                    <div className="row flex gx">
                        {data.filter((val) => {
                            return val.contract_name.toLowerCase().includes(searchTerm.toLowerCase())
                        }).map((val) => (
                            <div className="col-4 p-2 mb-2" key={val[0]}>
                                <div className="card shadow ">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a className="text-decoration-none" href="#">Station {val.name} à {val.contract_name}</a>
                                        </h5>
                                        <p className="card-text">{val.address}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StationList;