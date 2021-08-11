import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { IoClose, IoSearch } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import MoonLoader from 'react-spinners/MoonLoader';
import '../styles/listingPage.css';

// Some css in JSX use styled for a sweat searchBar
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
    font-size: 21px;
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

function StationList() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef();

    const collapseContainer = () => {
        if (inputRef.current) inputRef.current.value = "";
    };


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

    const handleSearchCity = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearchTerm(value)
    }

    // const handleSearchStation = (q) => {
    //     let inputValue = q.target.inputValue;
    //     inputValue.length > 2 && setSearchTerm(inputValue)
    // }

    // console.log(searchTerm);

    return (
        <div className="listing-station">
            <div className="list-banner">
                <h2 className="list-title">Liste des Stations de vélo</h2>
            
                <SearchBarContainer>
                    <SearchInputContainer>
                        <SearchIcon>
                            <IoSearch />
                        </SearchIcon>
                        <SearchInput 
                            placeholder="Rechercher une ville"
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
            {/* <div className="input-group mb-3">
                <input type="text" name="searchBarStation" id="searchBarStation" className="form-control-3 mb-3 ms-3 ps-2" placeholder="Rechercher une station" onChange={handleSearchStation} />
            </div> */}
            <div className="container mb-5 list-nantes">
                <div className="container mb-4">
                    <div className="row flex gx">
                        {data.filter((val) => {
                            return val.contract_name.toLowerCase().includes(searchTerm.toLowerCase());
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