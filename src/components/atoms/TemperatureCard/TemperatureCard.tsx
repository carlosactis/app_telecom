import { FC } from "react";
import { WiThermometerExterior, WiHumidity, WiStrongWind} from "react-icons/wi";

export interface ITemperatureCard {
    icons: string;
    title: string;
    size: number ;
    value: string;
    unit : string;
}



const TemperatureCard : FC<ITemperatureCard> = ({icons, title, size, value, unit}) => {

return (

        <div className="flex justify-start items-center text-sm">
            {icons == "WiThermometerExterior" ? <WiThermometerExterior size={size} /> : null}
            {icons == "WiHumidity" ? <WiHumidity size={size} /> : null}
            {icons == "WiStrongWind" ? <WiStrongWind size={size} /> : null}
                {title}
            <span className="font-medium ml-1" > {value} {unit} </span>
        </div>
  )
}
export default TemperatureCard