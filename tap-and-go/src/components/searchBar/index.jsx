import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoClose, IoSearch } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickOutside } from 'react-click-outside-hook';
import MoonLoader from 'react-spinners/MoonLoader';

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

const LineSeperator = styled.span`
    display: flex;
    min-width: 100%;
    min-height: 2px;
    background-color: #d8d8d878;
`;

const SearchContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    overflow-y: auto;
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WarningMessage = styled.span`
    color: #a1a1a1;
    font-size: 14px;
    display: flex;
    align-self: center;
    justify-self: center;
`;

export function SearchBar(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [parentRef, isClickedOutside] = useClickOutside();
    const inputRef = useRef();

    const expandContainer = () => {
        setExpanded(true);
    };

    const collapseContainer = () => {
        setExpanded(false);
        // setSearchQuery("");
        // setLoading(false);
        // setNoTvShows(false);
        // setTvShows([]);
        if (inputRef.current) inputRef.current.value = "";
    };

    useEffect(() => {
        if (isClickedOutside) collapseContainer();
    }, [isClickedOutside]);
    
    return (
        <SearchBarContainer>
            <SearchInputContainer>
                <SearchIcon>
                    <IoSearch />
                </SearchIcon>
                <SearchInput 
                    placeholder="Rechercher une station" 
                    onFocus={expandContainer}
                    ref={inputRef}
                    // value={searchQuery}
                    // onChange={changeHandler}
                />
                <AnimatePresence>
                    {isExpanded && (
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
            <LineSeperator />
            <SearchContent>
                <LoadingWrapper>
                    <MoonLoader loading color="#000" size={20} />
                </LoadingWrapper>
            </SearchContent>
            {/* {isExpanded && <LineSeperator />}
            {isExpanded && (
                <SearchContent>
                {isLoading && (
                    <LoadingWrapper>
                    <MoonLoader loading color="#000" size={20} />
                    </LoadingWrapper>
                )}
                {!isLoading && isEmpty && !noTvShows && (
                    <LoadingWrapper>
                    <WarningMessage>Start typing to Search</WarningMessage>
                    </LoadingWrapper>
                )}
                {!isLoading && noTvShows && (
                    <LoadingWrapper>
                    <WarningMessage>No Tv Shows or Series found!</WarningMessage>
                    </LoadingWrapper>
                )}
                {!isLoading && !isEmpty && (
                    <>
                    {tvShows.map(({ show }) => (
                        <TvShow
                        key={show.id}
                        thumbanilSrc={show.image && show.image.medium}
                        name={show.name}
                        rating={show.rating && show.rating.average}
                        />
                    ))}
                    </>
                )}
                </SearchContent>
            )} */}
        </SearchBarContainer>
    );
}