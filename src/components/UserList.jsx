const Oilam = () => {
    const oilam = [
        {id: 1, ism: "Shirinabonu - qizim", yosh: 8},
        {id: 2, ism: "Madinabonu - qizim", yosh: 6},
        {id: 3, ism: "Malika - ayolim", yosh: 32}
    ]
    return (
        <div>
            <h1>UserList</h1>
            {oilam.map((user) => (
                <div key={user.id}>
                    <h3>Ismi: {user.ism}</h3>
                    <h3>Yoshi: {user.yosh}</h3>
                </div>
            ))}
        </div>
    )
}
export default Oilam
