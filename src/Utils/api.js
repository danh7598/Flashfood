export const getCategoryItems = async () => {
    const response = await fetch('https://training.softech.cloud/api/categories');
    const json = await response.json();
    return json.categories;
};

export const getPopularItems = async () => {
    const response = await fetch('https://training.softech.cloud/api/products/popular');
    const json = await response.json();
    //console.log(json.products);
    return json.products;
};

export const getRecommendedItems = async () => {
    const response = await fetch('https://training.softech.cloud/api/products/recommended');
    const json = await response.json();
    //console.log(json.products);
    return json.products;
};


export const loginWithEmailAndPassword = async (email, password) => {
    const response = await fetch('https://training.softech.cloud/api/users/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": String(email).toLowerCase(),
            "password": password
        })
    });
    const json = await response.json();
    return json;
};

export const registerWithEmail = async (email, username, password) => {
    const response = await fetch('https://training.softech.cloud/api/users/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": String(email).toLowerCase(),
            "fullname": username,
            "password": password
        })
    });
    const json = await response.json();
    return json;
}