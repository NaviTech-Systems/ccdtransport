export const setCookie = (name: string, value: string, days: number): void => {
	const d = new Date();
	d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = 'expires=' + d.toUTCString();
	document.cookie = name + '=' + value + ';' + expires + ';path=/';
};

export const getCookie = (name: string): string => {
	const result = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)');
	return result ? result.pop() : '';
};
