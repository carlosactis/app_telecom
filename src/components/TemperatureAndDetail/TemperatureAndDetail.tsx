import React, { useEffect, useState } from "react"
import { formatBackground, getWeatherData, getWeatherDataLocation }  from "../../store/ApiOpenWeather"
import Inputs from "../atoms/Inputs/Inputs"
import TimeAndLocation from "../atoms/TimeAndLocation/TimeAndLocation"
import Forecast from "../molecules/Forecast/Forecast"
import GeneralData from "../molecules/GeneralData/GeneralData"
import SummaryTemp from "../molecules/SummaryTemp/SummaryTemp"
import TopButtons from "../molecules/TopButton/TopButtons"
import { cities } from '../molecules/TopButton/mockData'
import { RootObject } from "../types/modeule"

const TemperatureAndDetail = () => {
  const [query, setQuery] = useState('london');
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState<RootObject>();
  const [formatBg , setFormatBg] = useState("bg-gradient-to-r from-blue-400 to-blue-600")

  useEffect(() => {
      getWeatherData(query, units).then((data) => {
        setWeather(data)
        setFormatBg (formatBackground(data))
      })
  }, [query, units]);

  const handleClickTopButton = (event: React.MouseEvent<HTMLElement>) => {
      setQuery(event.currentTarget.title);
  };

  const handleChangeMetric =(event: React.MouseEvent<HTMLElement>) => {
    setUnits(event.currentTarget.title);
  };

  const handleLocation = (lat : number, lon: number) => {
    getWeatherDataLocation(lat, lon).then((data) => {
      setQuery(data.city.name);
    })
  };

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400  ${formatBg}
    `}>
        <TopButtons cities={cities} onClick={handleClickTopButton} />
        <Inputs onclick={handleChangeMetric} onClickInput={setQuery} onClickLocatio={handleLocation} />
    {weather ? (
        <>
          <TimeAndLocation data={weather} />
          <SummaryTemp data={weather} />
          <GeneralData  data={weather}/>
          <Forecast title={"Pronostico proximas Dias"} data={weather} />
        </>
      ): null}
    </div>
  )
}
export default TemperatureAndDetail