export const validateEmailLogin = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validateEmailSignUp = (email) => {
    if (!validateEmailLogin(email)) {
        return false;
    } else {
        if (email === 'danh7598@gmail.com') {
            return false;
        }
        else {
            return true;
        }
    }
    
}