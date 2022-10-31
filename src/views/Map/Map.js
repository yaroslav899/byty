/* eslint-disable import/no-unresolved */
// API
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import markerIcon from '@assets/img/icon-h.png';
import L from 'leaflet';

function RealtyListingPageView({ realtyList }) {
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

    let markers = [];

    if (!realtyList || !realtyList.length) {
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

    markers = realtyList.map((event) => {
        const longitude = event.acf ? event.acf.longitude : defaultCoordinates.long;
        const latitude = event.acf ? event.acf.latitude : defaultCoordinates.lat;
        return <Marker key={event.id} icon={homeIcon} position={[longitude, latitude]} />;
    });

    return (
        <MapContainer
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

export default RealtyListingPageView;
