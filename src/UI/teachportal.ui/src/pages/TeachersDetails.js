import { json, redirect, useLoaderData } from 'react-router-dom';

import { getAuthToken } from '../util/auth';
import MainNavigation from "../components/MainNavigation";
import TeachersGrid from "../components/TeachdersGrid";

function TeachersDetails() {
    const teachersList = useLoaderData();
    return (
        <>
            <MainNavigation />
            <TeachersGrid teachers={teachersList} />
        </>
    );
};

export default TeachersDetails;

export async function loadTeachersDetails() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/');
    }
    const response = await fetch('https://localhost:7281/api/Teacher/getteachers', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    if (!response.ok) {
        throw json(
            { message: 'Could not fetch Teachers details.' },
            {
                status: 500,
            }
        );
    } else {
        const resData = await response.json();
        return resData;
    }
};