/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// API
import React, { useState } from 'react';

import { getRealtyList } from '@/api';

export default function Breadcrumbs({ setRealtyList, setTotalPages, totalPages }) {
    console.log('breadcrumbs trigger');

    const [activePage, setActivePage] = useState(1);

    const goToPage = (pageNumber) => {
        window.scrollTo(0, 0);

        setActivePage(pageNumber);

        setRealtyList([]);

        async function updateRealtyList() {
            const { response, totalpages } = await getRealtyList(pageNumber);
            setTotalPages(totalpages);
            setRealtyList(response);
        }

        updateRealtyList();
    };

    const paginations = [];

    for (let i = 0; i < totalPages; i++) {
        paginations.push(
            <li className={`page-item ${i + 1 === activePage ? 'active' : ''}`} key={i}>
                <button type="button" className="page-link" aria-current="page" onClick={() => goToPage(i + 1)}>
                    { i + 1 }
                </button>
            </li>,
        );
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                    <button type="button" className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</button>
                </li>
                { paginations }
                <li className="page-item">
                    <button type="button" className="page-link" href="#">Next</button>
                </li>
            </ul>
        </nav>
    );
}
