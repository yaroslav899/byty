/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// API
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

// Components
import FilterBar from '@components/Listing-Page/FilterBar';
import Breadcrumbs from '@components/Listing-Page/Breadcrumbs';
import RealtyListElement from '@components/Listing-Page/RealtyListElement';
import Map from '@components/global/Map';

// Utils
import Spinner from '@/utils/global/Spinner';
import { getRealtyList } from '@/services';

export default function RealtyListingPage() {
    console.log('initialize component RealtyListingPage');

    useEffect(() => {
        console.log('mounted component RealtyListingPage');
    }, []);

    const [totalPages, setTotalPages] = useState(1);
    const [activePageNumber, setPage] = useState(1);

    const { category } = useParams();

    const { isLoading, isError, isSuccess, data = [] } = useQuery(
        ['realtyList', activePageNumber, category],
        async () => {
            const { response, totalpages } = await getRealtyList(activePageNumber, category);
            setTotalPages(totalpages);

            return response;
        },
        {
            keepPreviousData: true,
            onSuccess: () => {
                console.log('Get data!');
            },
            onError: (error) => {
                console.log(error.message);
            },
        },
    );

    const eventsElement = data.length
        ? data.map((event) => <RealtyListElement
            key={event.id}
            link={event.link}
            image={event.acf ? event.acf.images.url : ''}
            title={event.title.rendered || ''}
            type={event.acf in event ? event.acf.type : ''}
            price={event.acf in event ? event.acf.price : ''}
            square={event.acf in event ? event.acf.square : ''}
            city={event.acf in event ? event.acf.city : ''}
            location={event.acf in event ? event.acf.location : ''}
        />)
        : [];

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 reality-feed">
                    <FilterBar />

                    { isLoading
                        && <Spinner />}

                    { isError
                        && <p>Error</p>}

                    { eventsElement.length
                        && eventsElement}

                    { isSuccess && eventsElement.length
                        ? <Breadcrumbs
                            setPage={setPage}
                            activePageNumber={activePageNumber}
                            totalPages={totalPages}
                        />
                        : ''}

                    { isSuccess && !eventsElement.length
                        && <p>There are no realty for this request</p>}
                </div>
                <div className="col-6 reality-map">
                    <Map realtyList={data} />
                </div>
            </div>
        </div>
    );
}
