export default class BaseRequest {
	static parseResponse = async <T>(response: Response): Promise<T> => {
		const json = await response.json();

		if (response.status !== 200) {
			let error = '';

			if (json.non_field_errors) {
				error = json.non_field_errors[0];
			} else if (json.details) {
				error = json.details[0];
			} else {
				const key = Object.keys(json)[0];
				error = json[key][0];
			}

			throw new Error(error);
		}

		return json as T;
	};
}
