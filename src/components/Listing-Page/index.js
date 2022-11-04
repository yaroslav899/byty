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

// Hooks
import useLocalStorage from '@/hooks/useLocalStorage';

// Utils
import Spinner from '@/utils/global/Spinner';

// Services
import { fetchRealtyList } from '@/services';

// import { useQueryClient } from 'react-query';
// const queryClient = useQueryClient();
// const data = queryClient.getQueryData(['realtyList'], { exact: false });

export default function RealtyListingPage() {
    console.log('initialize component RealtyListingPage');

    useEffect(() => {
        console.log('mounted component RealtyListingPage');
    }, []);

    // State
    const [totalPages, setTotalPages] = useState(1);
    const [activePageNumber, setActivePage] = useState(1);

    // LocalStorage Hook
    const [pageData, setPageDataToLocalStorage] = useLocalStorage('pageData', null);
    console.log(pageData);

    // Get Params
    const { category } = useParams();

    // Use Query
    const { isLoading, isError, isSuccess, data = [] } = useQuery(
        ['realtyList', activePageNumber, category],
        async () => {
            if (pageData && pageData.data.length && pageData.totalPages && pageData.activePageNumber) {
                // eslint-disable-next-line no-debugger
                console.log(pageData);
                setTotalPages(pageData.totalPages);
                setActivePage(pageData.activePageNumber);

                // Clear Local Storage
                setPageDataToLocalStorage(null);

                return pageData.data;
            }

            const { response, totalpages } = await fetchRealtyList(activePageNumber, category);
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
            event={event}
            data={data}
            totalPages={totalPages}
            activePageNumber={activePageNumber}
            setPageDataToLocalStorage={setPageDataToLocalStorage}
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

                    { isSuccess && eventsElement.length
                        && eventsElement }

                    { isSuccess && eventsElement.length
                        && <Breadcrumbs
                            setActivePage={setActivePage}
                            activePageNumber={activePageNumber}
                            totalPages={totalPages}
                        />}

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
