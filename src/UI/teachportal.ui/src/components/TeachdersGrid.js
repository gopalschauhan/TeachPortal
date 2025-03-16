import classes from './DataList.module.css';

function TeachersGrid({ teachers }) {
    return (
        <div className={classes.data}>
            <h1>List of Registered Teachers</h1>
            {teachers &&
                (<ul className={classes.list}>
                    {teachers.map((teacher) => (
                        <li key={teacher.firstName} className={classes.item}>
                            <div className={classes.content}>
                                <h3>Name: {teacher.firstname} {teacher.lastname}</h3>
                                <h3>Email: {teacher.email}</h3>
                                <h3>Student Count: {teacher.numberOfStudentCreated}</h3>
                            </div>
                        </li>
                    ))}
                </ul>)
            }
        </div>
    );
};

export default TeachersGrid;