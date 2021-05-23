import axios from "axios";

export const getCategoryItems = async () => {
    const response = await fetch('https://training.softech.cloud/api/categories');
    const json = await response.json();
    return json.categories;
};

export const getPopularItems = async () => {
    const response = await fetch('https://training.softech.cloud/api/products/popular');
    const json = await response.json();
    // console.log(json.products);
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
};

export const forgotPasswordByEmail = async (email) => {
    const response = await fetch('https://training.softech.cloud/api/users/forgot-password', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": String(email).toLowerCase(),
        })
    });
    const json = await response.json();
    return json;
};

export const changePasswordAPI = (email, password, newPassword) => {
    axios.post('https://training.softech.cloud/api/users/change-password', {
        "email": email,
        "password": password,
        "newPassword": newPassword
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });

};

export const getRiderById = async (id) => {
    try {
        const response = await axios.get(`https://training.softech.cloud/api/riders/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const sendReviewForByUserForId = async (user, id, star, tip, comment) => {
    try {
        const response = await axios.put(`https://training.softech.cloud/api/riders/${id}/review/`, {
            "star": star,
            "tip": tip,
            "comment": comment,
            "reviewUserId": user
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};