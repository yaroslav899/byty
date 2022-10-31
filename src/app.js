import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const RealtyListingPage = lazy(() => import('./components/Listing-Page'));

export function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<RealtyListingPage />} />
                {/* There is should be 404 page */}
                <Route path="*" element={<RealtyListingPage />} />
            </Routes>
        </Suspense>
    );
}
