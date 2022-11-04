/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// API
import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

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
    console.log('initialize component RealtyListingPage');

    useEffect(() => {
        console.log('mounted component RealtyListingPage');
    }, []);

    const [totalPages, setTotalPages] = useState(1);
    const [activePageNumber, setPage] = useState(1);

    const { category } = useParams();

    const { isLoading, isError, error, data } = useQuery(
        ['realtyList', activePageNumber, category],
        async () => {
            const { response, totalpages } = await getRealtyList(activePageNumber, category);
            setTotalPages(totalpages);

            return response;
        },
        { keepPreviousData: true },
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        console.log(error);

        return <p>Error</p>;
    }

    const eventsElement = data.map((event) => <RealtyListElement
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

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 reality-feed">
                    <FilterBar />
                    <NavLink
                        to="/category"
                    >
                        Link with Category
                    </NavLink>
                    <br />
                    <NavLink
                        to="/"
                    >
                        Link to main
                    </NavLink>
                    { eventsElement }
                    <Breadcrumbs
                        setPage={setPage}
                        activePageNumber={activePageNumber}
                        totalPages={totalPages}
                    />
                </div>
                <div className="col-6 reality-map">
                    <Map realtyList={[]} />
                </div>
            </div>
        </div>
    );
}
