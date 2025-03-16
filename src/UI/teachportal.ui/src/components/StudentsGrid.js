import classes from './DataList.module.css';

function StudentsGrid({ students }) {
    return (
        <div className={classes.data}>
            <h1>Students Created by {localStorage.getItem('userName')}</h1>
            {students &&
                (<ul className={classes.list}>
                    {students.map((student) => (
                        <li key={student.firstName} className={classes.item}>
                            <div className={classes.content}>
                                <h3>Name: {student.firstName} {student.lastName}</h3>
                                <h3>Email: {student.email}</h3>
                            </div>
                        </li>
                    ))}
                </ul>)
            }
        </div>
    );
};

export default StudentsGrid;