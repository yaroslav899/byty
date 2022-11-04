/* eslint-disable import/no-unresolved */
// API
import React, { useState } from 'react';

import noPhoto from '@assets/img/nophoto.jpg';

export default function Image({ src, title = 'no image', pictureClassName, imgClassName }) {
    const [isImageExist, setImageStatus] = useState(true);

    const onError = () => {
        setImageStatus(false);
    };

    return (
        <picture className={pictureClassName}>
            <source srcSet={isImageExist ? src : noPhoto} type="image/svg+xml" />
            <img
                src={isImageExist ? src : noPhoto}
                className={imgClassName}
                alt={title}
                onError={onError}
            />
        </picture>
    );
}
