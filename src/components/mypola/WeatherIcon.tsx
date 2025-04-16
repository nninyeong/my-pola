import { WeatherState } from '@/types/weather.types';
import Image from 'next/image';

type WeatherIconProps = {
  weather: WeatherState;
  className?: string;
};

const WEATHER_ICON_MAP = {
  sunny: '/assets/icons/weather/sunny.webp',
  cloudy: '/assets/icons/weather/cloudy.webp',
  gloomy: '/assets/icons/weather/gloomy.webp',
  rainy: '/assets/icons/weather/rainy.webp',
  snowy: '/assets/icons/weather/snowy.webp',
};

export default function WeatherIcon({ weather, className }: WeatherIconProps) {
  return (
    <div className='relative w-[120px] h-[120px]'>
      <Image
        src={WEATHER_ICON_MAP[weather]}
        alt={weather}
        fill={true}
        className={`${className} object-contain`}
      />
    </div>
  );
}
