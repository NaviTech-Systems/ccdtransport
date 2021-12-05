export interface ErrorResponse {
	non_field_errors?: Array<string>;
	details?: string;
}

export interface PaginatedResponse<T> extends ErrorResponse {
	results: Array<T>;
	count: number;
	next: string;
	prev: string;
}

export type Response<T> = ErrorResponse & T;
