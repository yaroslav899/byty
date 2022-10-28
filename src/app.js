import React, { Suspense, lazy } from 'react';

const RealtyListingPage = lazy(() => import('./components/Listing-Page'));

export function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RealtyListingPage />
        </Suspense>
    );
}