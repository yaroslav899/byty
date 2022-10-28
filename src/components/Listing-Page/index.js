import React, { useState, useEffect } from 'react';

import Map from '@views/Map/Map';
import RealtyListElement from '@views/RealtyListElement';
import FilterBar from '@components/Listing-Page/FilterBar';
import Breadcrumbs from '@components/Listing-Page/Breadcrumbs';
import Spinner from '@/utils/global/Spinner';

export default function RealtyListingPage() {
    const [realtyList, setRealtyList] = useState([]);
    const [pagesInfo, setPagesInfo] = useState({totalCount: 1, totalPages: 1});

    useEffect(() => {
        fetch('https://test.event-camp.org/wp-json/wp/v2/posts?page=1')
            .then(response => {
                var data = [];

                if (response.status === 200) {
                    setPagesInfo({
                        totalCount: response.headers.get( 'x-wp-total'),
                        totalPages: response.headers.get( 'x-wp-totalpages'),
                    });

                    data = response.json();
                }

                return data;
            })
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            })
            .then((response) => {
                setRealtyList(response);
            })
    }, []);

    const eventsElement = realtyList.map((event) => {
        return <RealtyListElement 
            key={event.id}
            link={event.link}
            image={event.acf ? event.acf.images.url : ''}
            title={event.title.rendered || ''}
            type={event.acf in event ? event.acf.type : ''}
            price={event.acf in event ? event.acf.price : ''}
            square={event.acf in event ? event.acf.square : ''}
            city={event.acf in event ? event.acf.city : ''}
            location={event.acf in event ? event.acf.location : ''}
        />
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 reality-feed">
                    <FilterBar />
                    { eventsElement.length
                        ? eventsElement
                        : <Spinner />
                    }
                    <Breadcrumbs pagesInfo={pagesInfo} />
                </div>
                <div className="col-6 reality-map">
                    <Map realtyList={realtyList}/>
                </div>
            </div>
        </div>
    );
}
