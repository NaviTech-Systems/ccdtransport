import type { EndpointOutput } from '@sveltejs/kit';
import type { MaybePromise } from '@sveltejs/kit/types/helper';
import type { ServerRequest } from '@sveltejs/kit/types/hooks';

export interface RequestHandler<
	T = any,
	Locals = Record<string, any>,
	Output extends DefaultBody = DefaultBody
> {
	(request: ServerRequest<Locals, T>): MaybePromise<void | EndpointOutput<Output>>;
}
