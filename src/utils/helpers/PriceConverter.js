// API
import React, { Fragment, PureComponent } from 'react';

class PriceConverter extends PureComponent {
    render() {
        const { value, currency, square } = this.props;
        const price = `${Number(value).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ${currency}`;
        const pricem2 = Math.round(Number(value).toFixed(2) / square);

        return (
            <>
                {price}
                <span className="price-small">
                    {pricem2}
                    {' '}
                    {currency}
                    {' '}
                    /m²
                </span>
            </>
        );
    }
}

export default PriceConverter;
