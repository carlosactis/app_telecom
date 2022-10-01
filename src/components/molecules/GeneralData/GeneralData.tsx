import { WeatherData } from "../../types/modeule"
import GeneralDataCard from "../../atoms/GeneralDataCard/GeneralDataCard"
import { formatToLocalTime } from "../../../store/ApiOpenWeather"

const GeneralData = ({data} : WeatherData) => {

  const amanece = String(formatToLocalTime(data.city.sunrise))
  const anochece = String(formatToLocalTime(data.city.sunset, data.city.country))
  const temp_min = String(data.list[0].main.temp_min)
  const temp_max = String(data.list[0].main.temp_max)

  return (
    <div>
        <div className="flex flex-row justify-center items-center space-x-2 text-white py-3 text-sm">
          <GeneralDataCard size={10}  icons={"WiDaySunny"} title={'Amanece'} value={amanece} unit={'AM'}/>
          <GeneralDataCard size={10}  icons={"WiMoonAltNew"} title={'Anochece'} value={anochece} unit={'PM'}/>
          <GeneralDataCard size={10}  icons={"WiThermometerExterior"} title={'Min'} value={temp_min} unit={'°'}/>
          <GeneralDataCard size={10}  icons={"WiThermometer"} title={'Max'} value={'43'} unit={temp_max}/>
        </div>
    </div>
  )
}
export default GeneralData