// API
import React from 'react';

export default function Breadcrumbs({ setRealtyList, setTotalPages, totalPages }) {
    const goToPage = pageNumber => {        
        window.scrollTo(0, 0);

        setRealtyList([]);

        return fetch('https://test.event-camp.org/wp-json/wp/v2/posts?page=' + pageNumber)
            .then(response => {
                var data = [];

                if (response.status === 200) {
                    // setTotalCount(response.headers.get( 'x-wp-total'));
                    setTotalPages(response.headers.get( 'x-wp-totalpages'));

                    data = response.json();
                }

                return data;
            })
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            })
            .then((response) => {
                setRealtyList(response);
            })
    };
    
    const paginations = [];

    for (let i = 0; i < totalPages; i++ ) {
        paginations.push(
            <li className={`page-item ${i == 0 ? 'active' : ''}`}>
                <button className="page-link" aria-current="page" href="#" onClick={() => goToPage(i+1)}>
                    { i+1 }
                </button>
            </li>
        )
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                    <button className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</button>
                </li>
                { paginations }
                <li className="page-item">
                    <button className="page-link" href="#">Next</button>
                </li>
            </ul>
        </nav>
    )
}