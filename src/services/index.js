export const fetchRealtyList = (pageNumber, category) => {
    let totalpages = 0;
    let url = `https://test.event-camp.org/wp-json/wp/v2/posts?page=${pageNumber}`;

    if (category) {
        url = `${url}&categories=${12}`;
    }

    return fetch(url)
        .then((response) => {
            let data = [];

            if (response.status === 200) {
                // response.headers.get( 'x-wp-total');
                totalpages = response.headers.get('x-wp-totalpages');
                data = response.json();
            }

            return data;
        })
        .then((data) => data)
        .catch((error) => {
            console.log(error);
        })
        .then((response) => ({
            response,
            totalpages,
        }));
};
