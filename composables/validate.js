// email validation
export const validateEmail = (emailValue) => {

    const email = emailValue ? emailValue.trim() : emailValue;
    if (email && !isValidEmail(email)) {
        return {
            item: false,
            message: 'Email manzili noto\'g\'ri formatda'
        }
    }
    else {
        return {
            item: true,
            message: null
        }



    };
}

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// 👉 item Validator
export const isEmpty = (value, key) => {
    if (value === null || value === undefined || value === '') {
        return {
            item: false,
            message: `${key} maydonini to'ldirish shart`
        }

    }
    else {
        return {
            item: true,
        }
    }
}


// max and min length
export const validateLength = (value, minLength, maxLength, key) => {
    const length = String(value).trim().length;
    if (value) {
        if (length < minLength) {
            return {
                item: false,
                message: `${key} maydoni kamida ${minLength} belgidan iborat bo'lishi kerak`
            };
        } else if (length > maxLength) {
            return {
                item: false,
                message: `${key} maydoni maksimal uzunlik ${maxLength} belgidan iborat bo'lishi kerak`
            };
        }

        return {
            item: true,
            message: null
        };
    }
    else {
        return {
            item: true,
            message: null
        };

    }

}



// pasword validation
export const passwordValidator = password => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    // const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/
    const validPassword = regex.test(password)
    if (!validPassword) {
        return {
            item: false,
            message: 'Field must contain at least one uppercase, lowercase, special character and digit with min 8 chars'
        }
    }
    else {
        return {
            item: true,
            message: null
        }
    }
}

// confirm password 
export const confirmedValidator = (value, target) => {
    if (value != target) {
        return {
            item: false,
            message: 'The Confirm Password field confirmation does not match'
        }

    }
    else {
        return {
            item: true
        }
    }
}

export const validation = (massiv) => {
    return massiv.every(element => element.item === true);
}





