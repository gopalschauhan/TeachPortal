import React, { useState } from "react";
import { json, redirect, useNavigate } from 'react-router-dom';

import classes from './AuthForm.module.css';
import { getAuthToken } from '../util/auth';

function StudentForm() {
    let navigate = useNavigate();
    const [inputList, setinputList] = useState([{ firstname: '', lastname: '', email: '' }]);

    const handleaddclick = () => {
        setinputList([...inputList, { firstname: '', lastname: '', email: '' }]);
    };

    const handleremove = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setinputList(list);
    };

    const handleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setinputList(list);
    };

    const handlesavestudent = () => {
        const token = getAuthToken();

        fetch('https://localhost:7281/api/Student/createstudents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(inputList),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success", data);
                //redirect('/students');
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        navigate('/students');
    };

    return (
        <>
            {
                inputList.map((x, i) => {
                    return (
                        <div className={classes.form}>
                            <p>
                                <label htmlFor="firstname">First Name</label>
                                <input id="firstname" type="firstname" name="firstname" onChange={e => handleinputchange(e, i)} required />
                            </p>
                            <p>
                                <label htmlFor="lastname">Last Name</label>
                                <input id="lastname" type="lastname" name="lastname" onChange={e => handleinputchange(e, i)} required />
                            </p>
                            <p>
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" onChange={e => handleinputchange(e, i)} required />
                            </p>
                            <p>
                                <div className={classes.actions}>
                                    {
                                        inputList.length !== 1 && <button onClick={() => handleremove(i)}>Remove</button>
                                    }
                                </div>
                            </p>
                            <p>
                                <div className={classes.actions}>
                                    {
                                        inputList.length - 1 === i && inputList.length <= 4 && <button onClick={handleaddclick}>Add More</button>
                                    }
                                </div>
                            </p>
                        </div>
                    );
                })
            }
            <div className={classes.form}>
                <div className={classes.actions}>
                    <button onClick={handlesavestudent}>Save</button>
                </div>
            </div>
        </>
    );
};

export default StudentForm;