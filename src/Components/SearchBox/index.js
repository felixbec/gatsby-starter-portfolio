import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const searchClient = algoliasearch('FU0EA2OC3T', '88ef02700a097986e8a29efa4d00482a');

function App() {
    return (
        <div>
            <div className="container">
                <InstantSearch searchClient={searchClient} indexName="allthingsdev">
                <div className="search-panel">
                    <div className="search-panel__results">
                        <SearchBox
                            className="searchbox"
                            translations={{
                            placeholder: 'Search here',
                            }}
                        />
                        <Hits hitComponent={Hit} />
                    </div>
                </div>
                </InstantSearch>
            </div>
        </div>
    );
}

function Hit(props) {
    return (
        <div>
            <h1>
                <Highlight attribute="fields.tags.en-US" hit={props.hit} />
            </h1>
        </div>
    );
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired,
};

export default App;
