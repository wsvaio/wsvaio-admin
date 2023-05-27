declare global {
	interface ImportMetaEnv {
		readonly VITE_PROJECT_NAME: string;
		readonly VITE_DOCUMENT_TITLE: string;
		readonly VITE_BASE: string;
		readonly VITE_BASE_API: string;
	}
}

declare module "vue-router" {
	interface RouteMeta {
		title?: string;
		icon?: string;
		show?: boolean;
		disabled?: boolean;
		sort?: number;

		data?: {
			id?: string;
			parentId?: string;
			ancestors?: string;
			clientId?: string;
			name?: string;
			icon?: string;
			type?: "C" | "M" | "F";
			perms?: string;
			path?: string;
			component?: string;
			currentActiveMenu?: string;
			isExternalLink?: 1 | 0;
			isCache?: 0 | 1;
			isDisplay?: 0 | 1;
			sort?: number;
			state?: 0 | 1;
			remark?: string;
			createTime?: string;
			createById?: string;
			createBy?: string;
		};
	}
}


export {};
