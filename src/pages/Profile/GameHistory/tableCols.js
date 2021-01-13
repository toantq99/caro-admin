import { Button } from "antd";
import moment from "moment";

export const columns = ({ user }) => [
	{
		title: "ID",
		dataIndex: "id",
		key: "id",
	},
	{
		title: "Thời gian",
		dataIndex: "date",
		key: "date",
		render: (date) => moment(new Date(date)).fromNow(),
	},
	{
		title: "Đối thủ",
		key: "rival",
		render: ({ xPlayer, oPlayer }) =>
			xPlayer.sub === user.sub ? (
				<a href={"/profile/" + oPlayer.sub} target="_blank" rel="noreferrer">
					{oPlayer.displayName}
				</a>
			) : (
				<a href={"/profile/" + xPlayer.sub} target="_blank" rel="noreferrer">
					{xPlayer.displayName}
				</a>
			),
	},
	{
		title: "Kết quả",
		key: "result",
		render: ({ isDraw, winner }) =>
			isDraw ? "Hòa" : winner.sub === user.sub ? "Thắng" : "Thua",
	},
	{
		title: "Điểm",
		dataIndex: "point",
		key: "point",
	},
	{
		title: "Actions",
		key: "actions",
		dataIndex: "id",
		render: (id) => (
			<a href={"/game-replay/" + id} target="_blank" rel="noreferrer">
				<Button type="primary">Xem</Button>
			</a>
		),
	},
];
