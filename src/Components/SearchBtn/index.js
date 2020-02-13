import React from 'react';
import { bool, func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { SearchBtn } from './Search.styled';

const Search = ({ openSearch, setOpenSearch }) => {
    return (
        <SearchBtn openSearch={openSearch} onClick={() => setOpenSearch(!openSearch)}>
            <FontAwesomeIcon icon={faSearch} color="#000" size="1x" />
        </SearchBtn>
    )
}

Search.propTypes = {
    openSearch: bool.isRequired,
    setOpenSearch: func.isRequired,
    };

export default Search;