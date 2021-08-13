// import React from "react";
// import axios from "axios";
// import { useQuery } from "react-query";

// const fecthStations = async () => {
//     const res= await fetch("https://api.jcdecaux.com/vls/v1/stations?apiKey=686e9980efabf0d683569beb99aa243b09fe5513");
//     return res.json();
// }

// export default function Test() {
//     const { data, isLoading, error } = useQuery("stations", fecthStations);

//     console.log(data);
    
//         if (isLoading) return "Loading...";
//         if (error) return <pre>{error.message}</pre>;
    
//         return (
//         <div>
//             <h1>SpaceX Launches</h1>
//             <ul>
//                 {data.map((val, index) => (
//                     <li key={index}>{val.contract_name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// const endpoint = "https://api.jcdecaux.com/vls/v1/stations?apiKey=686e9980efabf0d683569beb99aa243b09fe5513";
// const STATIONS_QUERY = `
//     {
//         stations {
//             number
//             contract_name
//             name
//             address
//             position {
//                 lat
//                 lng
//             }
//             banking
//             bonus
//             bike_stands
//             available_bike_stands
//             available_bikes
//             status
//             last_update
//             }
//         }
//     }
//     `;

export default function Test() {
//     const { data, isLoading, error } = useQuery("launches", async () => {
//         return fetch(endpoint, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ query: STATIONS_QUERY })
//         })
//             .then((response) => {
//             if (response.status >= 400) {
//                 throw new Error("Error fetching data");
//             } else {
//                 return response.json();
//             }
//             })
//             .then((data) => data.data);
//         });
    
//         if (isLoading) return "Loading...";
//         if (error) return <pre>{error.message}</pre>;
    
        return (
        <div>
            <h1>Bienvenue sur la page de test</h1>
            {/* <ul>
            {data.stations.map((val, index) => (
                <li key={index}>{val.contract_name}</li>
            ))}
            </ul> */}
        </div>
    );
}