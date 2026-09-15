export type UserStatus = "active" | "blocked";

export type User = {
	id: string;
	name: string;
	email: string;
	status: UserStatus;
	registeredAt: string;
};

export type UsersResponse = {
	items: User[];
	total: number;
	page: number;
	limit: number;
};
