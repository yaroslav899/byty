import React, { useState } from 'react';
import Select from 'react-select'

import FilterSelects from '@components/Listing-Page/FilterSelects';

import { sortingOptions } from '@/utils/constants/sortingOptions';

import '@/scss/filterBar.scss';

export default function FilterBar() {
    const [isHide, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isHide);
    }

    return (
        <div className="reality-feed__filter-bar filter-bar">
            <button type="button" className={`col-12 filter-bar__button icon-three ${isHide ? "" : "active-three"}`} onClick={handleToggle}>
                <div className="hamburger hamburger-three"></div>
            </button>
            
            <div className={`col-12 row filter-bar__content ${isHide ? "" : "active"}`}>
                <FilterSelects />
                <button>filter</button>
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