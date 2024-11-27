const Weather = () => {
    let temperature = 11;
    if (temperature < 15 && temperature >= 10) {
        return <h1>Havo Salqin</h1>
    }
    else if (temperature > 15 && temperature <= 25) {
        return <h1>Havo Ajoyib</h1>
    } else if (temperature > 25) {
        return <h1>Havo Issiq</h1>
    } else if (temperature < 10) {
        return <h1>Havo Sovuq Gamash kiy</h1>
    }
    return (
        <div>Weather</div>
    )
}
export default Weather
