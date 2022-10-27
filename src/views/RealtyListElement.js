import React, { Fragment } from 'react';

import PriceConverter from '@/utils/helpers/PriceConverter';

export default function RealtyListElement(props) {
    const { link, image, title, type, price, square, city, location } = props;

    return <Fragment>
        <hr></hr>
        <article className="row realty-item-preview" >
            <div className="col-6">
                <picture className="realty-item-preview__image">
                    <source srcSet={image} type="image/svg+xml" />
                    <img src={image} className="img-fluid" alt={title} />
                </picture>
            </div>
            <div className="col-6">
                <a href={link}>
                    <h3 className="realty-item-preview__title">
                        {title}
                    </h3>
                    <div className="realty-item-preview__price">
                        <PriceConverter
                            value={price}
                            square={square}
                            currency="€" 
                        />
                    </div>
                    <div className="realty-item-preview__properties">
                        <p>{type}</p>
                        <p>{square} m²</p>
                        <p>{city}</p>
                        <p>{location}</p>
                    </div>
                    <div className="realty-item-preview__links">
                        hľadieť
                    </div>
                </a>
            </div>
        </article>
    </Fragment>
}