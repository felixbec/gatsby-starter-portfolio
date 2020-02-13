import React from 'react';
import { bool } from 'prop-types';
import { StyledSearch } from './Search.styled';
import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Highlight,
    PoweredBy,
    Configure,
    connectStateResults
} from 'react-instantsearch-dom';

import PropTypes from 'prop-types';


const searchClient = algoliasearch('FU0EA2OC3T', '88ef02700a097986e8a29efa4d00482a');

function Hit(props) {
    return (
        <div>
            <h5>
                <Highlight attribute="fields.title.en-US" hit={props.hit} />
            </h5>
        </div>
    );
}

const Results = connectStateResults(({ searchState }) =>
    searchState && searchState.query ? (
        <div>Searching for query {searchState.query}
        <Hits hitComponent={Hit} />
        </div>
        
    ) : (null)
);


const Menu = ({ openSearch }) => {
    return (
        <StyledSearch openSearch={openSearch}>
            <div>
                <div className="container">
                    <InstantSearch searchClient={searchClient} indexName="allthingsdev">
                    <Configure hitsPerPage={3} />
                    <div className="search-panel">
                        <div className="search-panel__results">
                            <SearchBox
                                className="searchbox"
                                translations={{
                                placeholder: 'Search article...',
                                }}
                            />
                            <Results />
                        </div>
                    </div>
                    <PoweredBy />
                    </InstantSearch>
                </div>
            </div>
        </StyledSearch> 
    )
}



Menu.propTypes = {
    openSearch: bool.isRequired,
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired,
};

export default Menu;















