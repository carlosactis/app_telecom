import { WeatherData } from "../../types/modeule"
import TemperatureCard from "../../atoms/TemperatureCard/TemperatureCard";
import { stringify } from "querystring";

const SummaryTemp = ({data} : WeatherData) => {
  const humidity :string = String(data.list[0].main.humidity)
  const wind :string = String(data.list[0].wind.speed )
  const pressure :string = String(data.list[0].main.pressure)
  const temp :string = String(data.list[0].main.temp)
  const icon :string= `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png` 
  
  return (
    <div>
        <div className="flex flex-row justify-center items-center py-6 text-xl text-cyan-300"> 
                <p>{data.list[0].weather[0].main}</p>
            </div>
            <div className="flex flex-row justify-between items-center py-3 text-white">
                <img src={icon} alt="" className="w-20" />
                <p className="text-5xl">{temp}°</p>
            <div className="flex flex-col space-y-2">
                <TemperatureCard size={18}  icons={"WiThermometerExterior"} title={'Presion'} value={pressure} unit={'°'}/>
                <TemperatureCard size={18}  icons={"WiHumidity"} title={'Humedad'} value={humidity}unit={'%'}/>
                <TemperatureCard size={18}  icons={"WiStrongWind"} title={'Viento'} value={wind} unit={'km/h'}/>
            </div>
        </div>
    </div>
  )
}
export default SummaryTemp