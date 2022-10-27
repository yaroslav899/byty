import React, { Suspense, lazy } from 'react';

const RealtyListingPage = lazy(() => import('./components/realty-listing-page'));

export function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RealtyListingPage />
        </Suspense>
    );
}