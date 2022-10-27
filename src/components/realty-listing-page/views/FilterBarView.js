import React from 'react';
import Select from 'react-select'
import FilterBar from '../containers/FilterBar';

export default function FilterBarView() {
    const colourOptions = [
        { value: 'chocolate', label: 'Základné zoradenie' },
        { value: 'strawberry', label: 'Publikované - najstaršie' },
        { value: 'vanilla', label: 'Aktualizované - najnovšie' },
        { value: 'vanilla', label: 'Aktualizované - najstaršie' },
        { value: 'vanilla', label: 'Cena - od najlacnejších' },
        { value: 'vanilla', label: 'Cena - od najdrahších' },
        { value: 'vanilla', label: 'Vytvorené - najnovšie' },
        { value: 'vanilla', label: 'Vytvorené - najstaršie' }
    ];
    
    return (
        <div className="reality-feed__filter-bar filter-bar">
            <FilterBar />
    
            <Select
                className="col-4 filter-bar__order"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
            />
        </div>
    )
}
