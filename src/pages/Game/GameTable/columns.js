import { Button } from "antd";
import moment from "moment";

export const columns = [
	{
		title: "ID",
		dataIndex: "id",
		key: "id",
	},
	{
		title: "Người chơi 1",
		key: "xPlayer",
		dataIndex: "xPlayer",
		render: (user) => (
			<a href={"/profile/" + user.sub} target="_blank" rel="noreferrer">
				{user.displayName}
			</a>
		),
	},
	{
		title: "Người chơi 2",
		key: "oPlayer",
		dataIndex: "oPlayer",
		render: (user) => (
			<a href={"/profile/" + user.sub} target="_blank" rel="noreferrer">
				{user.displayName}
			</a>
		),
	},
	{
		title: "Người thắng",
		key: "winner",
		render: (winner, { xPlayer, oPlayer, isDraw }) =>
			isDraw ? (
				"Hòa"
			) : winner === xPlayer.sub ? (
				<a href={"/profile/" + xPlayer.sub} target="_blank" rel="noreferrer">
					{xPlayer.displayName}
				</a>
			) : (
				<a href={"/profile/" + oPlayer.sub} target="_blank" rel="noreferrer">
					{oPlayer.displayName}
				</a>
			),
	},
	{
		title: "Điểm",
		dataIndex: "point",
		key: "point",
		render: (point) => point,
	},
	{
		title: "Thời gian",
		dataIndex: "date",
		key: "date",
		render: (date) => moment(new Date(date)).fromNow(),
	},
	{
		title: "",
		key: "actions",
		dataIndex: "id",
		render: (id) => (
			<a href={"/game-replay/" + id} target="_blank" rel="noreferrer">
				<Button type="primary">Xem</Button>
			</a>
		),
	},
];
