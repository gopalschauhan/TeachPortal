import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

function TeacherDashBoard() {
    return (
        <>
            <MainNavigation />
            <PageContent title="Welcome!">
                <p>{localStorage.getItem('userName')}</p>
            </PageContent>
        </>
    );
}

export default TeacherDashBoard;