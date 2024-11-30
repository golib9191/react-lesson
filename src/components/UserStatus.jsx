const UserStatus = (props) => {
    if (props.loggedIn && props.isAdmin) {
        return <h1>Hush kelibsiz Admin</h1>
    }else{
        return <h1>Hush kelibsiz Foydalanuvchi</h1>
    }
}
export default UserStatus
