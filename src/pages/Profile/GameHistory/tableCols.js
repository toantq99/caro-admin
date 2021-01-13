import moment from "moment";

export const columns = ({ user }) => [
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
			xPlayer.sub === user.sub ? oPlayer.displayName : xPlayer.displayName,
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
		render: (point) => point,
	},
];
