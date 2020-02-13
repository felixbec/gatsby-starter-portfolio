import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    Hits,
    SearchBox,
    RefinementList,
    Pagination,
    Highlight,
    Configure,
    PoweredBy
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const searchClient = algoliasearch('FU0EA2OC3T', '88ef02700a097986e8a29efa4d00482a');

function Filter() {
    return (
        <div>
            <div className="container">
                <InstantSearch searchClient={searchClient} indexName="allthingsdev">
                <SearchBox
                            className="searchbox"
                            translations={{
                            placeholder: 'Search here...',
                            }}
                        />
                <div className="search-panel row">
                    <div className="search-panel__filters col-md-3">
                        <h4>Category</h4>
                        <RefinementList attribute="fields.category.en-US" />
                        <h4>Tags</h4>
                        <RefinementList attribute="fields.tags.en-US" />
                    </div>
                    <Configure hitsPerPage={5} />
                    <div className="search-panel__results col-md-9">
                        <div className="search-panel__results__filters">
                            <RefinementList attribute="fields.tags.en-US" />
                            <RefinementList attribute="fields.category.en-US" />
                        </div>

                        <Hits hitComponent={Hit} />
                        <div className="pagination">
                            <Pagination />
                        </div>
                        <PoweredBy />
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
            <h3>
                <Highlight attribute="fields.title.en-US" hit={props.hit} />
            </h3>
            <p>
                <Highlight attribute="fields.description.en-US" hit={props.hit} />
            </p>
        </div>
    );
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired,
};

export default Filter;
