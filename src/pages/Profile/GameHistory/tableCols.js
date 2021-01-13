import { Button } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

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
				<Link to={"/profile/" + oPlayer.sub}>{oPlayer.displayName}</Link>
			) : (
				<Link to={"/profile/" + xPlayer.sub}>{xPlayer.displayName}</Link>
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
			<Link to={"/game-replay/" + id}>
				<Button type="primary">Xem</Button>
			</Link>
		),
	},
];
