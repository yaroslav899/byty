export const fetchRealtyList = () => {
    let url = 'https://test.event-camp.org/wp-json/wp/v2/posts'

    return fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }

            return [];
        })
        .then(data => data)
        .catch(error => {
            console.log(error);
        });
};