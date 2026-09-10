export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const isValidLength = (value: string, minLength: number, maxLength: number): boolean => {
    return value.length >= minLength && value.length <= maxLength;
}