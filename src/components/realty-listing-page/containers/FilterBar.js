import React, { Fragment, useState } from 'react';
import FilterSelects from './FilterSelects';
import '../../../scss/filterBar.scss';

export default function FilterBar() {
    const [isHide, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isHide);
    }

    return (
        <Fragment>
            <button type="button" className='col-12 filter-bar__button' onClick={handleToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                </svg> <span>Filters</span>
            </button>
            
            <div className={`col-12 row filter-bar__content ${isHide ? "" : "active"}`}>
                <FilterSelects />
            </div>
        </Fragment>
    )
}