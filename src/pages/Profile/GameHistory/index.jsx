import { fetchGameHistorySuccess } from "@/actions/Profile";
import API_URL from "@/config/API";
import useAxios from "@/hooks/useAxios";
import useRouter from "@/hooks/useRouter";
import { columns } from "@/pages/Profile/GameHistory/tableCols";
import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

const findMostSuitableRoom = () => {
	return;
};

setTimeout(() => {
	findMostSuitableRoom();
}, 5000);

const GameHistory = () => {
	const dispatch = useDispatch();
	const { gameHistory, info } = useSelector((state) => state.profile);
	const { params } = useRouter();
	const Axios = useAxios();

	useEffect(() => {
		Axios.get(API_URL + "/games/by-user/" + (params || {}).sub)
			.then((res) => dispatch(fetchGameHistorySuccess(res.data.games)))
			.catch(() => dispatch(fetchGameHistorySuccess([])));
	}, [Axios, dispatch, params]);

	return (
		<div className="game-history-wrapper">
			<h2>Lịch sử đấu</h2>
			<Table
				size="small"
				bordered
				columns={columns({ user: info })}
				dataSource={gameHistory}
				pagination={{ pageSize: 5 }}
				rowKey={(game) => game.id}
			/>
		</div>
	);
};
export default GameHistory;
