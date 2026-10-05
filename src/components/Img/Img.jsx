import './Img.css'

function WeatherForcastImg({img, imgAlt}) {

    return (
        <>
            <div className="weather">
                <img src ={img} alt={imgAlt}></img>
            </div>

        </>
    )
}

export default WeatherForcastImg