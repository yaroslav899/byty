// API
import React from 'react';

export default function Spinner() {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow m-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
