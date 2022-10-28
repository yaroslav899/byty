// API
import React from 'react';

export default function Breadcrumbs({ totalPages }) {
    const paginations = [];

    for (let i = 0; i < totalPages; i++ ) {
        paginations.push(
            <li className={`page-item ${i == 0 ? 'active' : ''}`}>
                <a className="page-link" aria-current="page" href="#">
                    { i+1 }
                </a>
            </li>
        )
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                { paginations }
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}