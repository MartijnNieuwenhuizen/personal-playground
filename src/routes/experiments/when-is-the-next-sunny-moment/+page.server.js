import { OPEN_WEATHER_API_KEY } from '$env/static/private';

export async function load() {
	try {
		const lat = 52.08944;
		const lon = 5.107493;
		const key = OPEN_WEATHER_API_KEY;
		const lang = 'nl';
		const exclude = 'daily,lat,lon,minutely,timezone,timezone_offset';

		const weatherAPI = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&exclude=${exclude}`;
		const currentWeatherData = await fetch(weatherAPI);
		const all = await currentWeatherData.json();
		const { hourly } = all;

		const sunrise = new Date(all.current.sunrise * 1000);
		const sunriseHour = sunrise.getHours();
		// const sunriseMinute = sunrise.getMinutes();

		const sunset = new Date(all.current.sunset * 1000);
		const sunsetHour = sunset.getHours();
		// const sunsetMinute = sunset.getMinutes();

		const firstSunnyMoment = hourly.find((single) => {
			const notTooMuchClouds = single.clouds < 60;
			const hourDate = new Date(single.dt * 1000);
			const hour = hourDate.getHours();
			const sunIsUp = hour >= sunriseHour && hour <= sunsetHour;

			return notTooMuchClouds && sunIsUp;
		});

		return {
			firstSunnyMoment: firstSunnyMoment
		};
	} catch (err) {
		return {
			error: 'Sorry, there is an issue with the Weather API.'
		};
	}
}
