import { GET_APP, GOT_APP, GET_APP_FAILED } from '$constants/app';
import type { GetApp, GotApp, GetAppFailed, Error } from '$frontend/types/app/actions';
import type { ActionWithPayload } from '$vendor/sedux/types/slicer';

export const getApp = (): ActionWithPayload<GetApp> => ({
	type: GET_APP,
	payload: {
		results: []
	}
});

export const gotApp = (result): ActionWithPayload<GotApp> => ({
	type: GOT_APP,
	payload: {
		result
	}
});

export const getAppFailed = (error: Error): ActionWithPayload<GetAppFailed> => ({
	type: GET_APP_FAILED,
	payload: { error }
});
