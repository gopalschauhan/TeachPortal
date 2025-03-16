import {
    Form,
    Link,
    useActionData,
    useNavigation,
} from 'react-router-dom';

import classes from './AuthForm.module.css';

function LoginForm() {
    const data = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <>
            <Form method="post" className={classes.form}>
                {data && data.errors && (
                    <ul>
                        {Object.values(data.errors).map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                )}
                {data && data.message && <p>{data.message}</p>}
                <p>
                    <label htmlFor="username">User Name</label>
                    <input id="username" type="username" name="username" required />
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" required />
                </p>
                <div className={classes.actions}>
                    <button disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Login'}
                    </button>
                </div>
                <div className={classes.actions}>
                    <Link to="/signup">Not Registered, click here to Sign Up</Link>
                </div>
            </Form>
        </>
    );
};

export default LoginForm;