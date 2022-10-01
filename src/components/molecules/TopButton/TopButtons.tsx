import { FC } from 'react';
import {ICitiesProps} from '../../types/index';

export interface ITopProps {
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  cities: ICitiesProps[];
}

const TopButtons : FC<ITopProps>  = ({cities , onClick }) => {

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button key={city.id} title={city.name}  className='text-black -text-lg font-medium' onClick={onClick}>
          {city.name}
        </button>
      ))}
    </div>
  )
}
export default TopButtons