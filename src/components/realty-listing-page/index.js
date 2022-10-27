import React, { useState, useEffect } from 'react';

import RealtyMapView from './views/RealtyMapView';
import RealtyListElement from './views/RealtyListElement';
import FilterBarView from './views/FilterBarView';

import { fetchRealtyList } from '../../api';

export default function RealtyListingPage() {
    const [realtyList, setRealtyList] = useState([]);

    useEffect(() => {
        fetchRealtyList().then((response) => {
            setRealtyList(response);
        })
    }, []);

    if (!realtyList.length) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 reality-feed">
                        <FilterBarView/>
                    </div>
                    <div className="col-6 reality-map">
                        <RealtyMapView />
                    </div>
                </div>
            </div>
        );
    }

    const eventsElement = realtyList.map((event) => {
        return <RealtyListElement 
            key={event.id}
            link={event.link}
            image={event.acf.images.url}
            title={event.title.rendered}
            type={event.acf.type}
            price={event.acf.price}
            square={event.acf.square}
            city={event.acf.city}
            location={event.acf.location}
        />
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 reality-feed">
                    <FilterBarView/>
                    {eventsElement}
                </div>
                <div className="col-6 reality-map">
                    <RealtyMapView realtyList={realtyList}/>
                </div>
            </div>
        </div>
    );
}
