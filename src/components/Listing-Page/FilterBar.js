/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// API
import React, { useState } from 'react';
import Select from 'react-select';

// Components
import FilterSelects from '@components/Listing-Page/FilterSelects';

// Utils
import { sortingOptions } from '@/utils/constants/sortingOptions';

import '@/scss/filterBar.scss';

export default function FilterBar() {
    const [isHide, setActive] = useState('false');

    const handleToggle = () => {
        setActive(!isHide);
    };

    return (
        <div className="reality-feed__filter-bar filter-bar">
            <button type="button" className={`col-12 filter-bar__button ${isHide ? '' : 'active'}`} onClick={handleToggle}>
                <div className="hamburger" />
            </button>

            <div className={`col-12 row filter-bar__content ${isHide ? '' : 'active'}`}>
                <FilterSelects />
                <button type="button">filter</button>
            </div>

            <Select
                className="col-4 filter-bar__order"
                defaultValue={sortingOptions[0]}
                name="color"
                options={sortingOptions}
            />
        </div>
    );
}
