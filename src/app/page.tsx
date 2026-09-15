"use client";

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/services/user";

export default function Home() {
	const usersQuery = useQuery({
		queryKey: ["users"],
		queryFn: () => getUsers({}),
	});

	if (usersQuery.isPending) {
		return <main>Loading...</main>;
	}

	if (usersQuery.isError) {
		return <main>Failed to load users</main>;
	}

	return (
		<main>
			<h1>Users</h1>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Status</th>
						<th>Registered</th>
					</tr>
				</thead>

				<tbody>
					{usersQuery.data.items.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.status}</td>
							<td>{user.registeredAt}</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}
