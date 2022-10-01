import { DateTime } from "luxon";
import { FC } from "react";
import ForecastCard from "../../atoms/ForecastCard/ForecastCard"
import { List, RootObject} from "../../types/modeule"

export interface IForecastProps {
    title: string;
    data : RootObject;
  }

const Forecast: FC<IForecastProps> = ({title , data }) => {

  const secc = 86400
  const date = DateTime.fromSeconds(data.list[0].dt + secc).toFormat("yyyy-MM-dd") + " 06:00:00"
  const indeList = data.list.findIndex((item) => item.dt_txt === date);
  const arrayForecastDay: Array<number> = [indeList, indeList + 8, indeList + 16, indeList + 24, indeList + 32];


  return (
    <div>
        <div className="flex items-center justify-start mt-6">
            <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row items-center justify-between text-white">
          {arrayForecastDay.map((item, index) => (
            <ForecastCard key={index} hours={DateTime.fromSeconds(data.list[item].dt).toFormat("dd-MM-yyyy")} icon={data.list[item].weather[0].icon} temp={Math.round(data.list[item].main.temp)} />
          ))}
        </div>
    </div>
  )
}
export default Forecast