import UserStatus from "./components/UserStatus.jsx";

export const App = () => {
    return (
        <UserStatus loggedIn={true} isAdmin={true}/>
    )
}