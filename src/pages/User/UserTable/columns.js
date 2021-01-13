import { Button, Space, Tag } from "antd";
import moment from "moment";

export const columns = ({
	handleUnblockUser,
	handleBlockUser,
	redirectProfile,
}) => [
	{
		title: "ID",
		dataIndex: "id",
		key: "id",
	},
	{
		title: "Display Name",
		dataIndex: "displayName",
		key: "displayName",
	},
	{
		title: "Email",
		dataIndex: "email",
		key: "email",
	},
	{
		title: "Provider",
		dataIndex: "sub",
		key: "sub",
		render: (sub) => sub.slice(0, sub.indexOf("|")),
	},
	{
		title: "Point",
		dataIndex: "point",
		key: "point",
	},
	{
		title: "Created At",
		dataIndex: "created_at",
		key: "created_at",
		render: (created_at) =>
			moment(new Date(created_at)).format("DD/MM/YYYY HH:mm"),
	},
	{
		title: "Status",
		dataIndex: "isLocked",
		key: "isLocked",
		render: (isLocked) =>
			isLocked ? (
				<Tag color="magenta">Blocked</Tag>
			) : (
				<Tag color="green">Normal</Tag>
			),
	},
	{
		title: "Actions",
		key: "actions",
		render: (user) => (
			<Space>
				<a href={"/profile/" + user.sub} target="_blank" rel="noreferrer">
					<Button onClick>Profile</Button>
				</a>

				<Button
					style={{ width: 80 }}
					type="primary"
					danger={!user.isLocked}
					onClick={() =>
						user.isLocked ? handleUnblockUser(user) : handleBlockUser(user)
					}
				>
					{user.isLocked ? "Unblock" : "Block"}
				</Button>
			</Space>
		),
	},
];
