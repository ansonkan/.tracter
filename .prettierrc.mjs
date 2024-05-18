/** @type {import("prettier").Config} */
export default {
	semi: true,
	useTabs: true,
	trailingComma: 'all',
	singleQuote: true,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
