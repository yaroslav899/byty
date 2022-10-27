import React, { Fragment } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import markerIcon from '../../../img/icon-h.png';
import L from 'leaflet';

const RealtyListingPageView = (realtyList) => {
    const homeIcon = new L.Icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon,
        popupAnchor:  [-0, -0],
        iconSize: [32,32],  
    });

    let markers = [];

    if (!realtyList.length) {
        return (
            <Fragment>
                <MapContainer
                    center={[48.147322, 17.171528]}
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
        return <Marker key={event.id} icon={homeIcon} position={[event.acf.longtitude, event.acf.latitude]} />
    });

    return (
        <Fragment>
            <MapContainer
                center={[48.147322, 17.171528]}
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