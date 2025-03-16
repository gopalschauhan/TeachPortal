import { Form, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/createstudents"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Create Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/students"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Students Detail
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teachers"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Teachers Detail
            </NavLink>
          </li>
          <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
