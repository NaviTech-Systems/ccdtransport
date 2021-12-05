export interface GetApp {}

export interface GotApp {
	result: Record<string, any>;
}

export interface GetAppFailed {
	error: Error;
}

export interface Error {
	status: number;
	message: string;
}
