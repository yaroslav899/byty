import React from 'react';
import Select from 'react-select'

import FilterSelects from '@components/realty-listing-page/FilterSelects';

export default function FilterBarView({ sortingOptions, handleToggle, isHide }) {
    return (
        <div className="reality-feed__filter-bar filter-bar">
            <button type="button" className={`col-12 filter-bar__button icon-three ${isHide ? "" : "active-three"}`} onClick={handleToggle}>
                <div className="hamburger hamburger-three"></div>
            </button>
            
            <div className={`col-12 row filter-bar__content ${isHide ? "" : "active"}`}>
                <FilterSelects />
            </div>

            <Select
                className="col-4 filter-bar__order"
                defaultValue={sortingOptions[0]}
                name="color"
                options={sortingOptions}
            />
        </div>
    )
}
