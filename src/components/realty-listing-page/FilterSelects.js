import React, { Fragment } from 'react';
import Select, { components } from "react-select";
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
    {
        label: "Byty",
        options: [
            { label: "vsetky", value: "všetky" },
            { label: "garsonka", value: "Garsónka" },
            { label: "dvojgarsonka", value: "Dvojgarsónka" },
            { label: "1-izbovy-byt", value: "1 izbový byt" },
            { label: "2-izbovy-byt", value: "2 izbový byt" }
        ]
    },
    {
        label: "Byty",
        options: [
            { label: "vsetky", value: "všetky" },
            { label: "garsonka", value: "Garsónka" },
            { label: "dvojgarsonka", value: "Dvojgarsónka" },
            { label: "1-izbovy-byt", value: "1 izbový byt" },
            { label: "2-izbovy-byt", value: "2 izbový byt" }
        ]
    }
];

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
    const stav = [
        { value: 'all', label: 'Všetky stavy' },
        { value: 'novy', label: 'Novostavba' },
        { value: 'reconstr', label: 'Rekonštrukcia' },
        { value: 'origin', label: 'Pôvodný stav' },
        { value: 'construction', label: 'Vo výstavbe' },
        { value: 'project', label: 'Developerský projekt' }
    ];

    const type = [
        { value: 'all', label: 'Všetky typy' },
        { value: 'sale', label: 'Predaj' },
        { value: 'rent', label: 'Prenájom' },
        { value: 'bath', label: 'Kúpa' },
        { value: 'sublease', label: 'Podnájom' },
        { value: 'exchange', label: 'Výmena' },
        { value: 'auction', label: 'Dražba' }
    ];

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