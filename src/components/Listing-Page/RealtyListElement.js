/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';

// import { useQueryClient } from 'react-query';

// Components
import Image from '@components/global/Image';

// Hooks
// import useLocalStorage from '@/hooks/useLocalStorage';

// Utils
import PriceConverter from '@/utils/helpers/PriceConverter';

export default function RealtyListElement(props) {
    const {
        link, image, title, type, price, square, city, location,
    } = props;

    // const queryClient = useQueryClient();
    // const data = queryClient.getQueryData(['realtyList'], { exact: false });

    return (
        <>
            <hr />
            <article className="row realty-item-preview">
                <div className="col-6">
                    <a href={link}>
                        <Image
                            src={image}
                            title={title}
                            pictureClassName="realty-item-preview__image"
                            imgClassName="img-fluid"
                        />
                    </a>
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
                            <p>
                                {square}
                                {' '}
                                m²
                            </p>
                            <p>{city}</p>
                            <p>{location}</p>
                        </div>
                        <div className="realty-item-preview__links">
                            hľadieť
                        </div>
                    </a>
                </div>
            </article>
        </>
    );
}
