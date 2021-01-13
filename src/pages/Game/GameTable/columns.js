import { Button } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

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
			<Link to={"/profile/" + user.sub}>{user.displayName}</Link>
		),
	},
	{
		title: "Người chơi 2",
		key: "oPlayer",
		dataIndex: "oPlayer",
		render: (user) => (
			<Link to={"/profile/" + user.sub}>{user.displayName}</Link>
		),
	},
	{
		title: "Người thắng",
		key: "winner",
		render: (winner, { xPlayer, oPlayer, isDraw }) =>
			isDraw ? (
				"Hòa"
			) : winner === xPlayer.sub ? (
				<Link to={"/profile/" + xPlayer.sub}>{xPlayer.displayName}</Link>
			) : (
				<Link to={"/profile/" + oPlayer.sub}>{oPlayer.displayName}</Link>
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
			<Link to={"/game-replay/" + id}>
				<Button type="primary">Xem</Button>
			</Link>
		),
	},
];
