import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';


function StationList() {
const [data, setData] = useState([]);

// similar to "componentDidMount" and "componentDidUpdate"
// useEffect(() => {
//     const fetchData = async () => {
//         const result = await axios(
//             'https://api.jcdecaux.com/vls/v1/stations?apiKey=686e9980efabf0d683569beb99aa243b09fe5513',
//         );

//         setData(result.data);
//         console.log(result.data);
//     };
//     fetchData();
// }, [])

useEffect(() => {
    const fetchData = async () => {
        const result = await axios(
            'https://api.jcdecaux.com/vls/v3/stations?contract=nantes&apiKey=686e9980efabf0d683569beb99aa243b09fe5513',
        );

        setData(result.data);
        console.log(result.data);
    };
    fetchData();
}, [])

    return (
        <div className="listing-station">
            <h2>Liste des Stations de vélo en France</h2>
            <Fragment className="container mb-5 list-nantes">
                <div className="container mb-4">
                    <h2>Nantes</h2>
                    <div className="row flex gx">
                        {data.map(item => (
                            <div className="col-4 p-2 mb-2" key={item.contractName}>
                                <div className="card shadow ">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a className="text-decoration-none" href="">Station {item.name}</a>
                                        </h5>
                                        <p className="card-text">{item.address}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fragment>
        </div>
    );
}

export default StationList;