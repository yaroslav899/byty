// API
import React, { memo } from 'react';

function Breadcrumbs({ setPage, activePageNumber, totalPages }) {
    console.log('breadcrumbs initialization');

    const goToPage = (pageNumber) => {
        window.scrollTo(0, 0);

        setPage(pageNumber);
    };

    const paginations = [];

    for (let i = 0; i < totalPages; i++) {
        paginations.push(
            <li className={`page-item ${i + 1 === activePageNumber ? 'active' : ''}`} key={i}>
                <button type="button" className="page-link" aria-current="page" onClick={() => goToPage(i + 1)}>
                    { i + 1 }
                </button>
            </li>,
        );
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className={`page-item ${activePageNumber === 1 ? 'disabled' : ''}`}>
                    <button
                        type="button"
                        className="page-link"
                        onClick={() => goToPage(activePageNumber - 1)}
                    >
                        Previous
                    </button>
                </li>
                { paginations }
                <li className={`page-item ${activePageNumber === totalPages.length + 1 ? 'disabled' : ''}`}>
                    <button
                        type="button"
                        className="page-link"
                        onClick={() => goToPage(activePageNumber + 1)}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default memo(Breadcrumbs);
