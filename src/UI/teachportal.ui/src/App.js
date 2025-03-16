import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login, { loginaction } from "./pages/Login";
import SignUp, { signupaction } from "./pages/SignUp";
import TeacherDashBoard from "./pages/TeacherDashBoard";
import StudentsDetails, { loadStudentDetails } from "./pages/StudentsDetails";
import TeachersDetails, { loadTeachersDetails } from "./pages/TeachersDetails";
import CreateStudents from "./pages/CreateStudents";
import { checkAuthLoader } from "./util/auth";
import { action as logoutAction } from "./pages/Logout"

const router = createBrowserRouter([
    { path: '/', element: <Login />, action: loginaction },
    { path: '/signup', element: <SignUp />, action: signupaction },
    { path: '/dashboard', element: <TeacherDashBoard />, loader: checkAuthLoader },
    { path: '/students', element: <StudentsDetails />, loader: loadStudentDetails },
    { path: '/teachers', element: <TeachersDetails />, loader: loadTeachersDetails },
    { path: '/createstudents', element: <CreateStudents/>, loader: checkAuthLoader },
    { path: '/logout', action: logoutAction }
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
};

export default App;