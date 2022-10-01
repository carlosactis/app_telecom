
export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  clouds?: {
    all: number;
  };
  base?: string;
  visibility?: number;
country?: string | any;
details?: string | any;
dt?  : number | any;
feels_like?: number | any;
humidity? : number | any;
icon ?: string | any;
lat ?: number | any;
lon ?: number | any;
name?: string ;
speed ?: number | any;  
sunrise? : number | any;
sunset ?: number | any;
temp ?: number | any;
temp_max ?: number | any;
temp_min? : number | any;
timezone ?: number | any;
coord?: { lat?: number, lon?:number } | any;
main?:{
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
} | any;
sys?: {  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;} | any,
  weather?: Weather[] | any;
  wind?: {
    speed: number;
    deg: number;
  } | any;
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}


export interface AlertState {
  message: string;
}

export interface ApiOpenWeatherState {
  clouds?: {
    all: number;
  };
  id? : number;
  cod? : number;
  base?: string;
  visibility?: number;
country?: string | any;
details?: string | any;
dt?  : number | any;
feels_like?: number | any;
humidity? : number | any;
icon ?: string | any;
lat ?: number | any;
lon ?: number | any;
name?: string ;
speed ?: number | any;  
sunrise? : number | any;
sunset ?: number | any;
temp ?: number | any;
temp_max ?: number | any;
temp_min? : number | any;
timezone ?: number | any;
coord?: { lat?: number, lon?:number } | any;
main?:{
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
} | any;
sys?: {  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;} | any,
  weather?: Weather[] | any;
  wind?: {
    speed: number;
    deg: number;
  } | any;
  data: WeatherData;
}

export interface TimezoneData {
  dt  : number;
  timezone : number;
  secs : any | null;
  zone : string | null;
}

export interface ICitiesProps {
  id: number;
  name: string;
  image: string;
  
}


