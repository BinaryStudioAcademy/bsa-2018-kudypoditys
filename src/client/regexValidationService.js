export const required = value =>
    value || typeof value === "number" ? undefined : "Required";

export const maxLength = max => value =>
    value && value.length > max
        ? `Must be ${max} characters or less`
        : undefined;

export const maxLength20 = maxLength(20);
export const maxLength40 = maxLength(40);
export const maxLength255 = maxLength(255);

export const minLength = min => value =>
    value && value.length < min
        ? `Must be ${min} characters or more`
        : undefined;

export const minLength2 = minLength(2);
export const minLength8 = minLength(8);

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? "Invalid email address"
        : undefined;

export const phoneNumber = value =>
    value && !/^([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}$/i.test(value)
        ? "Invalid phone number format ex.8095XXXXXX"
        : undefined;

export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? "Only alphanumeric characters"
        : undefined;

export const aol = value =>
    value && /.+@aol\.com/.test(value)
        ? "Really? You still use AOL for your email?"
        : undefined;

export const isValidZip = value =>
    value && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)
        ? "The US zip code must contain 5 digits"
        : undefined;
export const password = value =>
    value && !/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/.test(value)
        ? "Password must contain uppercase, downcase letter and at least 1 number"
        : undefined;
export const number = value =>
    value && !/[0-9]/i.test(value) ? "Must be a number" : undefined;

export const positiveNumber = value =>
    value && !/^\d*\.?\d*$/i.test(value) ? "Must be a positive" : undefined;

export const isEqualToFields = (...fields) => (value, allValues) => {
    for (const field of fields) {
        if (allValues[field] !== value) {
            return "Should be equal to " + field;
        }
    }

    return undefined;
};
