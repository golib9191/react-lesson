const Greeting = ({kunVaqti}) => {
    return kunVaqti === "ertalab" ? (
        <h1>Xayrli Tong</h1>
    ) : (
        <h1>Xayrli Kech</h1>
    )
}
export default Greeting
