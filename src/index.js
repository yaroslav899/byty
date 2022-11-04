/* eslint-disable import/no-unresolved */
// API
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// Components
import { App } from './app';

// SCSS
import '@/scss/main.scss';

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

const root = createRoot(document.getElementById('root'));

root.render(
    <QueryClientProvider client={queryClient} contextSharing>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>,
);
