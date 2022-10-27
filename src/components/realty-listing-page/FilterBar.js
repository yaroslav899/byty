import React, { useState } from 'react';

import FilterBarView from '@views/FilterBar/FilterBar';
import { sortingOptions } from '@/utils/constants/sortingOptions';

import '@/scss/filterBar.scss';

export default function FilterBar() {
    const [isHide, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isHide);
    }

    return <FilterBarView sortingOptions={sortingOptions} handleToggle={handleToggle} isHide={isHide}/>
}