import { useEffect, useState } from "react";
import './Clima.css';

function Clima() {
    const [clima, setClima] = useState(null);
    const APY_KEY = import.meta.env.VITE_OPEMEATHER_API_KEY;
    const lat = 19.43340176391603
    const lng = -99.13607365427576

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APY_KEY}&units=metric&lang=es`)
            .then(res => res.json())
            .then(data => {
                setClima(data)
            })
            .catch(error => console.log("Error: ", error));

    }, [])

    return (
        <div className="divClima">
            {
                clima ? (
                    <>
                        <p>{clima.name} Tem: {clima.main.temp} Hum: {clima.main.humidity}</p>
                        <p>{clima.weather[0].description}</p>

                    </>
                ) : (
                    <p> Cargan clima...</p>
                )

            }
        </div >
    );
}

export default Clima;