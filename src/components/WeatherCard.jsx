export default function WeatherCard({date, temp,rain}) {
    
    return (
        <>
            <div>
                <h2>Date: {date}</h2>
                <p>{temp}&deg; F</p>
                <p>Chance of Rain: {rain}%</p>
        </div>
        </>
    )
}