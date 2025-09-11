export const ValidateSignIn = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(password);

    if (!emailRegex) return 'Please enter a valid email address.';
    if (!passwordRegex) return 'Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
    return console.log('Validation successful');
};
