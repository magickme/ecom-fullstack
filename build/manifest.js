export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"immutable/start-dfd02f5e.js","imports":["immutable/start-dfd02f5e.js","immutable/chunks/index-c12da143.js"],"stylesheets":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/6.js'),
			() => import('./server/nodes/7.js'),
			() => import('./server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "account",
				pattern: /^\/account\/?$/,
				names: [],
				types: [],
				path: "/account",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "cart",
				pattern: /^\/cart\/?$/,
				names: [],
				types: [],
				path: "/cart",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				path: "/login",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "signup",
				pattern: /^\/signup\/?$/,
				names: [],
				types: [],
				path: "/signup",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "[id]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
