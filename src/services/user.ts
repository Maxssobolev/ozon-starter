import type { UsersResponse, UserStatus } from "@/types/user";

type GetUsersParams = {
	q?: string;
	status?: UserStatus;
};

export async function getUsers({
	q,
	status,
}: GetUsersParams): Promise<UsersResponse> {
	const params = new URLSearchParams();

	if (q) {
		params.set("q", q);
	}

	if (status) {
		params.set("status", status);
	}

	const response = await fetch(`/api/users?${params.toString()}`);

	if (!response.ok) {
		throw new Error("Failed to load users");
	}

	return response.json();
}
