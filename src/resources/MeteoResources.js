const API_URL =
	'https://api.openweathermap.org/data/2.5/weather?q=helfaut&lang=FR&units=metric&appid=d0f0478fb759f869cb291add389c4369';

export class MeteoResources {
	constructor() {}

	async getOne() {
		try {
			const response = await fetch(API_URL);
			const oneResources = await response.json();
			return response.status >= 400
				? {
						error: {
							slug: id,
							statusCode: response.status,
							detail: oneResources?.detail,
						},
				  }
				: oneResources;
		} catch (error) {
			return { error: { ...error } };
		}
	}
}
