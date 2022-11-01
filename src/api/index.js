export const getRealtyList = () => {
    let totalpages = 0;

    return fetch('https://test.event-camp.org/wp-json/wp/v2/posts?page=1')
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
