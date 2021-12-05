import { GET_APP } from '$constants/app';
import { gotApp, getAppFailed } from '$actions/app';
import { request } from '$utils/request';
import { addInterceptor, createSmartInterceptor } from '$vendor/sedux/interceptor';

const smartOne = createSmartInterceptor(async () => {
	const res = await request.get(`/api/`);
	const json = await res.json();

	if (res.status !== 200) {
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

	return json;
});
smartOne.fulfilled = (result, { dispatch }) => {
	return dispatch(() => gotApp(result));
};

smartOne.rejected = (error, { dispatch }) => {
	return dispatch(() => getAppFailed({ status: 500, message: error.message }));
};

export function appInterceptor(): void {
	addInterceptor(GET_APP, smartOne);
}
