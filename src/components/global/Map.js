/* eslint-disable import/no-unresolved */
// API
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import markerIcon from '@assets/img/icon-h.png';
import L from 'leaflet';

function Map({ realtyList = [], scrollSmoothHandler }) {
    // default coordinates for Bratislava
    const defaultCoordinates = {
        lat: 48.147322,
        long: 17.171528,
    };

    const homeIcon = new L.Icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon,
        popupAnchor: [-0, -0],
        iconSize: [32, 32],
    });

    /* const eventHandlers = useMemo(
        (i) => ({
            click(event) {
                const { lat, lng } = event.latlng;
                console.log(`Clicked at ${lat}, ${lng}`);
                console.log(event.target.options.data);
                // console.log(scrollSmoothHandler);
                console.log(i);
            },
        }),
        [],
    ); */

    const eventHandlers = (event, i) => {
        const { lat, lng } = event.latlng;
        console.log(`Clicked at ${lat}, ${lng}`);
        console.log(event.target.options.data);
        scrollSmoothHandler(i);
    };

    const markers = realtyList.length
        ? realtyList.map((event, i) => {
            const longitude = event.acf ? event.acf.longitude : defaultCoordinates.long;
            const latitude = event.acf ? event.acf.latitude : defaultCoordinates.lat;

            return <Marker
                key={event.id}
                data={event.id}
                eventHandlers={{
                    click: (e) => {
                        eventHandlers(e, i);
                    },
                }}
                icon={homeIcon}
                position={[longitude, latitude]}
            />;
        })
        : null;

    return (
        <MapContainer
            center={[defaultCoordinates.lat, defaultCoordinates.long]}
            zoom={13}
            scrollWheelZoom={false}
            attributionControl={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers}
        </MapContainer>
    );
}

export default Map;
