export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/[id].svelte"),
	() => import("../../src/routes/account.svelte"),
	() => import("../../src/routes/cart.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/login.svelte"),
	() => import("../../src/routes/signup.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"account": [[0, 3], [1]],
	"cart": [[0, 4], [1]],
	"login": [[0, 6], [1]],
	"signup": [[0, 7], [1]],
	"[id]": [[0, 2], [1]]
};