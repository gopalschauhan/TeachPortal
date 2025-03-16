import { json, redirect } from 'react-router-dom';
import LoginForm from "../components/LoginForm";

function Login() {
    return (
        <LoginForm />
    );
};

export default Login;

export async function loginaction({ request }) {
    const data = await request.formData();
    const authData = {
        userName: data.get('username'),
        password: data.get('password'),
    };

    const response = await fetch('https://localhost:7281/api/Auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(authData),
    });

    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Could not authenticate user.' }, { status: 500 });
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