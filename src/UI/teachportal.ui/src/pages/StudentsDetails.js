import { json, redirect, useLoaderData } from 'react-router-dom';

import { getAuthToken } from '../util/auth';
import MainNavigation from "../components/MainNavigation";
import StudentsGrid from "../components/StudentsGrid";

function StudentsDetails() {
    const studentList = useLoaderData();
    return (
        <>
            <MainNavigation />
            <StudentsGrid students={studentList} />
        </>
    );
};

export default StudentsDetails;

export async function loadStudentDetails() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/');
    }
    const response = await fetch('https://localhost:7281/api/Student/getstudents', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    if (!response.ok) {
        throw json(
            { message: 'Could not fetch Student details.' },
            {
                status: 500,
            }
        );
    } else {
        const resData = await response.json();
        return resData;
    }
};

