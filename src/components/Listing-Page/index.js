/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// API
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import FilterBar from '@components/Listing-Page/FilterBar';
import Breadcrumbs from '@components/Listing-Page/Breadcrumbs';

// Views
import Map from '@views/Map/Map';
import RealtyListElement from '@views/RealtyListElement';

// Utils
import Spinner from '@/utils/global/Spinner';
import { getRealtyList } from '@/api';

export default function RealtyListingPage() {
    const [realtyList, setRealtyList] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const { category } = useParams();

    useEffect(
        () => getRealtyList()
            .then(({ response, totalpages }) => {
                setTotalPages(totalpages);
                setRealtyList(response);
            }),
        [],
    );

    useEffect(() => {
        console.log('realty list was updated');
    }, [realtyList]);

    useEffect(() => {
        console.log('category was updated');
    }, [category]);

    const eventsElement = realtyList.map((event) => <RealtyListElement
        key={event.id}
        link={event.link}
        image={event.acf ? event.acf.images.url : ''}
        title={event.title.rendered || ''}
        type={event.acf in event ? event.acf.type : ''}
        price={event.acf in event ? event.acf.price : ''}
        square={event.acf in event ? event.acf.square : ''}
        city={event.acf in event ? event.acf.city : ''}
        location={event.acf in event ? event.acf.location : ''}
    />);

    const pageInformation = () => {
        if (!eventsElement.length) {
            return <Spinner />;
        }

        return (
            <>
                { eventsElement }
                <Breadcrumbs setRealtyList={setRealtyList} setTotalPages={setTotalPages} totalPages={totalPages} />
            </>
        );
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 reality-feed">
                    <FilterBar />
                    { pageInformation() }
                </div>
                <div className="col-6 reality-map">
                    <Map realtyList={realtyList} />
                </div>
            </div>
        </div>
    );
}
