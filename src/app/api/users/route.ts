const users = [
	{
		id: "1",
		name: "Max Sobolev",
		email: "max@example.com",
		status: "active",
		registeredAt: "2026-08-01T10:00:00Z",
	},
	{
		id: "2",
		name: "Alex Ivanov",
		email: "alex@example.com",
		status: "blocked",
		registeredAt: "2026-07-20T12:00:00Z",
	},
	{
		id: "3",
		name: "Maria Petrova",
		email: "maria@example.com",
		status: "active",
		registeredAt: "2026-06-15T09:00:00Z",
	},
];

export async function GET(request: Request) {
	const url = new URL(request.url);

	const q = url.searchParams.get("q")?.trim().toLowerCase() ?? "";
	const status = url.searchParams.get("status");

	const filteredUsers = users.filter((user) => {
		const matchesQuery =
			!q ||
			user.name.toLowerCase().includes(q) ||
			user.email.toLowerCase().includes(q);

		const matchesStatus = !status || user.status === status;

		return matchesQuery && matchesStatus;
	});

	return Response.json({
		items: filteredUsers,
		total: filteredUsers.length,
		page: 1,
		limit: 20,
	});
}
