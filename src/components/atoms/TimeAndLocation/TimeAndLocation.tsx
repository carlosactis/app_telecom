import { WeatherData } from "../../types/modeule"


const TimeAndLocation = ({data} : WeatherData) => {
  return (
    <div>
      <div className="flex justify-center items-center my-6 mx-3">
        <p className="text-white text-xl font-extralight">
       {/*    {formatToLocalTime(weather.dt, weather.timezone)} */}
        </p>
      </div>
      <div className="flex justify-center items-center my-3 mx-3">
        <p className="text-white text-xl font-medium">
          {data.city.name} - {data.city.country} 
        </p>
      </div>
    </div>
  )
}
export default TimeAndLocation