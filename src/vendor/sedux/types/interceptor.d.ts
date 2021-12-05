import type { ActionWithPayload, GeneralAction } from './slicer';

export interface Store {
	[z as string]: Record<symbol, Array<InterceptorMap>>;
}

export interface InterceptorApi {
	getState: () => T;
	dispatch: (action: GeneralAction) => void;
}

export type InterceptorPayload<T> = ActionWithPayload<T>;

export type Interceptor = (payload: InterceptorPayload, api: InterceptorApi) => Promise<any>;
export type SmartInterceptor = {
	fulfilled?: (error: any, api: InterceptorApi) => void | (() => void);
	rejected?: (error: any, api: InterceptorApi) => void | (() => void);
	clone?: (prev?: SmartInterceptor) => SmartInterceptor;
	handled?: boolean;
	(payload: InterceptorPayload<any>, api: InterceptorApi): Promise<any>;
};

export type InterceptorMap = {
	callback: Interceptor;
	mode: 'pre' | 'post';
	handled?: boolean;
	fulfilled?: (result: any, api: InterceptorApi) => Action;
	rejected?: (error: any, api: InterceptorApi) => Action;
	clone?: () => SmartInterceptor;
};

export type Mode = 'pre' | 'post';

export type AddInterceptor = (
	constant: symbol,
	callback: Interceptor | SmartInterceptor,
	mode: Mode = 'pre',
	handled = false,
	fulfilled?: (result: any, api: InterceptorApi) => void,
	rejected?: (error: any, api: InterceptorApi) => void
) => void;

export type GetInterceptors = (name: string, constant: symbol) => InterceptorMap[];

export type CallInterceptors = (
	name: string,
	constant: symbol,
	payload: InterceptorPayload,
	api: InterceptorApi,
	mode: Mode
) => Promise<any>;

export type PreIntercept = (constant: symbol, action: PureAction, api: InterceptorApi) => void;
export type PostIntercept = (constant: symbol, action: PureAction, api: InterceptorApi) => void;
export type ResetInterceptors = (name: string) => void;

export type CreateSmartInterceptor = (callback: Interceptor) => SmartInterceptor;
