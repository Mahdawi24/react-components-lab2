import './WeatherForcast.css'

function WeatherForcast({day, img, imgAlt, conditions, time}) {

    return (
        <>
            <div className="weather">
                <h2>Day of the Week</h2>
                <h2>{day}</h2>
                
                <br />
                <p><span>conditions : </span>{conditions}</p>
                <br />
                <p><span>time : </span>{time}</p>
                <br />
            </div>

        </>
    )
}

export default WeatherForcast