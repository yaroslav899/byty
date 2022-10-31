/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// API
import React from 'react';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';

// Utils
import { options, stav, type } from '@/utils/constants/filters';

const animatedComponents = makeAnimated();

const handleHeaderClick = (id) => {
    // ToDo: Should be optimized
    const node = document.querySelector(`#${id}`).parentElement
        .nextElementSibling;
    const classes = node.classList;

    if (classes.contains('hide')) {
        node.classList.remove('hide');
    } else {
        node.classList.add('hide');
    }
};

const customStyles = {};

function CustomGroupHeading(props) {
    const { id } = props;

    return (
        <button
            type="button"
            className="group-heading-wrapper"
            onClick={() => handleHeaderClick(id)}
        >
            <components.GroupHeading {...props} />
        </button>
    );
}

export default function FilterSelects() {
    return (
        <>
            <Select
                className="col-8 filter-bar__content-input"
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                isMulti
                options={options}
                placeholder="Lokalita: Napíšte, kde hľadáte nehnuteľnosť"
                noOptionsMessage={() => 'No results found'}
            />
            <Select
                className="col-4 filter-bar__content-input"
                styles={customStyles}
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                components={{ GroupHeading: CustomGroupHeading }}
                isMulti
                placeholder="Druh"
                options={options}
            />
            <Select
                className="col-4 filter-bar__content-input"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                placeholder="Typ"
                options={type}
            />
            <Select
                className="col-4 filter-bar__content-input"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                placeholder="Stav"
                options={stav}
            />
            <label className="col-2 filter-bar__content-input" htmlFor="price-from">
                <input type="number" placeholder="Cena od:" />
            </label>
            <label className="col-2 filter-bar__content-input" htmlFor="price-until">
                <input type="number" placeholder="Cena do:" />
            </label>
        </>
    );
}
