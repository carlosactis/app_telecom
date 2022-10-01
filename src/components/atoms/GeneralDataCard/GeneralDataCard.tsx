import { FC } from "react";
import { WiDaySunny, WiMoonAltNew, WiThermometerExterior, WiThermometer} from "react-icons/wi";

export interface ITemperatureCard {
    icons: string;
    title: string;
    size: number ;
    value: string;
    unit : string;
}



const GeneralDataCard : FC<ITemperatureCard> = ({icons, title, size, value, unit}) => {

return (
    <>
    {icons === 'WiDaySunny' ? <WiDaySunny size={size} /> : null}
    {icons === 'WiMoonAltNew' ? <WiMoonAltNew size={size} /> : null}
    {icons === 'WiThermometerExterior' ? <WiThermometerExterior size={size} /> : null}
    {icons === 'WiThermometer' ? <WiThermometer size={size} /> : null}
    <p className="font-light text-sm">{title}: {value} {unit}</p>
    <p className="font-light">|</p>

    </>
  )
}
export default GeneralDataCard