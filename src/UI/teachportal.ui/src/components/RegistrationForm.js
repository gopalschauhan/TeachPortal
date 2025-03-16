import {
    Form,
    Link,
    useActionData,
    useNavigation,
} from 'react-router-dom';

import classes from './AuthForm.module.css';

function RegistrationForm() {
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
                    <label htmlFor="firstname">First Name</label>
                    <input id="firstname" type="firstname" name="firstname" required />
                </p>
                <p>
                    <label htmlFor="lastname">Last Name</label>
                    <input id="lastname" type="lastname" name="lastname" required />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" required />
                </p>
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
                        {isSubmitting ? 'Submitting...' : 'Sign Up'}
                    </button>
                </div>
                <div className={classes.actions}>
                    <Link to="/">Registered User?, click here to Login</Link>
                </div>
            </Form>
        </>
    );
};

export default RegistrationForm;