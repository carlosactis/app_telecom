import { FC } from "react"

export interface IForecastCardProps {
    hours: string,
    icon: string,
    temp: number,
}

const ForecastCard : FC<IForecastCardProps> = ({hours, icon,temp} ) => {

return (
    <div className="flex flex-col items-center justify-center">
        <p className="text-sm font-light">{hours}</p>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon} className="w-12 my-1 " />
        <p className="font-medium">{temp} °</p>
    </div>
  )
}
export default ForecastCard