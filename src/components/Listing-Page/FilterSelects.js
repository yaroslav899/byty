// API
import React, { Fragment } from 'react';
import Select, { components } from "react-select";
import makeAnimated from 'react-select/animated';

// Utils
import { options, stav, type } from '@/utils/constants/filters';

const animatedComponents = makeAnimated();

const handleHeaderClick = id => {
    const node = document.querySelector(`#${id}`).parentElement
        .nextElementSibling;
    const classes = node.classList;

    if (classes.contains("hide")) {
        node.classList.remove("hide");
    } else {
        node.classList.add("hide");
    }
};

const customStyles = {}

const CustomGroupHeading = props => {
    return (
        <div
            className="group-heading-wrapper"
            onClick={() => handleHeaderClick(props.id)}
        >
            <components.GroupHeading {...props} />
        </div>
    );
};

export default function FilterSelects() {
    return (
        <Fragment>
            <Select
                className="col-8 filter-bar__content-input"
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                isMulti
                options={options}
                placeholder="Lokalita: Napíšte, kde hľadáte nehnuteľnosť"
                noOptionsMessage={() => 'No results found' }
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
            <label className="col-4 filter-bar__content-input">
                <input type="number" placeholder="Cena od: €"/>
                <input type="number" placeholder="Cena do: €"/>
            </label>
        </Fragment>
    )
}