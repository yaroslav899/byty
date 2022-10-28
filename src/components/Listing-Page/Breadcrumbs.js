import React from 'react';

export default function Breadcrumbs({ pagesInfo }) {
    var { totalCount, totalPages} = pagesInfo;
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">{totalCount} {totalPages}</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}