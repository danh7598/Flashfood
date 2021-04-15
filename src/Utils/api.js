export const getCategoryItems = async () => {
    const response = await fetch('https://training.softech.cloud/api/categories')
    const json = await response.json()
    return json.categories
}
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
    })
    const json = await response.json();
    return json
}