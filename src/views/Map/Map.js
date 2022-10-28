import React, { Fragment } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import markerIcon from '@assets/img/icon-h.png';
import L from 'leaflet';

const RealtyListingPageView = ({ realtyList }) => {
    // default coordinates for Bratislava
    const defaultCoordinates = {
        lat: 48.147322,
        long: 17.171528
    }

    const homeIcon = new L.Icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon,
        popupAnchor:  [-0, -0],
        iconSize: [32,32],  
    });

    let markers = [];

    if (!realtyList || !realtyList.length) {
        return (
            <Fragment>
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
            </Fragment>
        )
    }

    markers = realtyList.map((event) => {
        let longitude = event.acf ? event.acf.longitude : defaultCoordinates.long;
        let latitude = event.acf ? event.acf.latitude : defaultCoordinates.lat;
        return <Marker key={event.id} icon={homeIcon} position={[longitude, latitude]} />
    });

    return (
        <Fragment>
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
        </Fragment>
    )
};

export default RealtyListingPageView;