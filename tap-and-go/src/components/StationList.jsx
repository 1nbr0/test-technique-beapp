import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { IoClose, IoSearch } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/listingPage.css'; // I also import a css file for the listing page of stations
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
// import { useQuery } from "react-query";

// Some css in JSX use styled for a sweat searchBar and more simple to uses in this context
const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 24em;
    height: 3.2em;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
    overflow: hidden;

    @media only screen and (max-width: 768px) {
        width: 20em;
    }
`;

const SearchInputContainer = styled(motion.div)`
    width: 100%;
    min-height: 3.2em;
    display:flex;
    align-items: left;
    position: relative;
    padding: 2px 15px; 
`;

const SearchInput = styled.input`
    width: 100%;
    outline: none;
    border: none;
    font-size: 20px;
    color: #2891af;
    font-weight: 500;
    border-radius: 6px;
    background-color: transparent;

    &:focus {
        outline: none;
        &::placeholder {
            opacity: 0;
        }
    }

    &::placeholder {
        color: #bebebe;
        transition: all 250ms ease-in-out;
    }
`;

const SearchIcon = styled.span`
    color: #2891af;
    font-size: 25px;
    margin-right: 10px;
    vertical-align: middle;
`;

const CloseIcon = styled(motion.span)`
    color: #2891af;
    font-size: 23px;
    display: flex;
    align-items: center;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        color: #dfdfdf;
    }
`;
    // I tried to use the hook useQuery but if I use it, I need to declare a life cycle

        // const fecthStations = async () => {
        //     const res= await fetch("https://api.jcdecaux.com/vls/v1/stations?apiKey=686e9980efabf0d683569beb99aa243b09fe5513");
        //     return res.json();
        // }

function StationList() {
    const [data, setData] = useState([]);
    // const [details, setDetails] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef();

    // I tried to use the hook useQuery but if I use it, I need to declare a life cycle
    
        // const { data, isLoading, error } = useQuery("stations", fecthStations);
        
        //     if (isLoading) return "Loading...";
        //     if (error) return <pre>{error.message}</pre>;

    const collapseContainer = () => {
        if (inputRef.current) inputRef.current.value = "";
    };

// Use axios to purchase and fetch the data of api jcdecaux on a useEffect method
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                'https://api.jcdecaux.com/vls/v1/stations?apiKey=686e9980efabf0d683569beb99aa243b09fe5513',
            );
            setData(result.data); // get result of all stations with axios query and put it on data state
            console.log(result.data);
        };
        fetchData();
    }, [])

    // Use axios to purchase and fetch the data details of api jcdecaux
    // useEffect(() => {
    //     const fetchDetails = async () => {
    //         const resultDetails = await axios(
    //             'https://api.jcdecaux.com/vls/v3/stations/9087?contract=marseille&apiKey=686e9980efabf0d683569beb99aa243b09fe5513',
    //         );
    //         setDetails(resultDetails.data); // get result details of stations with axios query and put it on data state
    //         console.log(resultDetails.data);
    //     };
    //     fetchDetails();
    // }, [])

    const handleSearchCity = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearchTerm(value)
    }

    /*  Open a popup to show station details
        I don't know how to get details of a specific station. 
        I wanted to display details in a OffCanvas component in the right of the page, but it didn't fix in react-bootsrtap 5.0.
        So I decided to display them in a popup
    */
    const Modal = () => (
        <Popup trigger={<Link to={Modal} className="text-decoration-none">Station </Link>} modal>
            {/* {details.map((res) => ( */}
                <section className="popup-body" /* key={res[0]} */>
                    <div className="popup-list">
                        <h1 className="popup-title">
                            Nom de la station - adresse
                        </h1>
                        <h4 className="popup-text">Information sur la station :
                            <li>Status :</li>
                            <li>Capacité :</li>
                            <li>Vélos disponible :</li>
                        </h4>
                        {/* <p>{res.status}, {res.mainStands.capacity}</p> */}
                    </div>
                </section>
            {/* ))} */}
        </Popup>
    );

    return (
        <div className="listing-station">
            <div className="list-banner">
                <h1 className="list-title">Liste <span className="list-title-span">des Stations</span> de vélo</h1>

                <SearchBarContainer>
                    <SearchInputContainer>
                        <SearchIcon>
                            <IoSearch />
                        </SearchIcon>
                        <SearchInput 
                            placeholder="Rechercher une ville, station ..."
                            ref={inputRef}
                            onChange={handleSearchCity}
                        />
                        <AnimatePresence>
                            {(
                                <CloseIcon
                                    key="close-icon"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={collapseContainer}
                                    transition={{ duration: 0.2 }}
                                >
                                    <IoClose />
                                </CloseIcon>
                            )}
                        </AnimatePresence>
                    </SearchInputContainer>
                </SearchBarContainer>

            </div>
            
            <div className="container mb-5">
                <div className="container mb-4">
                    <div className="row flex gx">
                        {data.filter((val) => {
                            return val.contract_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.name.toLowerCase().includes(searchTerm.toLowerCase());
                        }).map((val, index) => (
                            <div className="list-container bg-light" key={index}>
                                <div className="list-card-container">
                                    <h5 className="card-title">
                                        <Modal /> {val.name} à {val.contract_name}
                                    </h5>
                                    <p className="card-text">{val.address}</p>
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