import { json, redirect } from 'react-router-dom';
import RegistrationForm from "../components/RegistrationForm";

function SignUp() {
    return (
        <RegistrationForm/>
    );
};

export default SignUp;

export async function signupaction({ request }) {
    const data = await request.formData();
    const signUpData = {
        firstName: data.get('firstname'),
        lastName: data.get('lastname'),
        email: data.get('email'),
        userName: data.get('username'),
        password: data.get('password'),
    };

    const response = await fetch('https://localhost:7281/api/Auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
    });

    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Could not register user.' }, { status: 500 });
    }

    const resData = await response.json();
    const token = resData.token;
    const userName = resData.userName;

    localStorage.setItem('token', token);
    localStorage.setItem('userName', userName);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());

    return redirect('/dashboard');
}