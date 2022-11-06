/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';

// Components
import Image from '@components/global/Image';

// Utils
import PriceConverter from '@/utils/helpers/PriceConverter';

export default function RealtyListElement(props) {
    const { event, data, totalPages, activePageNumber, setPageDataToLocalStorage, scrollRef } = props;
    const {
        link,
        acf: {
            images: { url: imageUrl = '' } = {},
            title: { rendered: renderedTitle } = {},
            type,
            price = 1,
            square = 1,
            city = 'Bratislava',
            location = 'Petrzlka',
        },
    } = event;

    const goToDetailPage = () => {
        setPageDataToLocalStorage({ data, totalPages, activePageNumber, coords: [] });
    };

    return (
        <article className="row realty-item-preview" ref={scrollRef}>
            <div className="col-6">
                <a href={link} onClick={(e) => goToDetailPage(e)}>
                    <Image
                        src={imageUrl}
                        title={renderedTitle}
                        pictureClassName="realty-item-preview__image"
                        imgClassName="img-fluid"
                    />
                </a>
            </div>
            <div className="col-6">
                <a href={link} onClick={() => goToDetailPage()}>
                    <h3 className="realty-item-preview__title">
                        {renderedTitle}
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
    );
}
