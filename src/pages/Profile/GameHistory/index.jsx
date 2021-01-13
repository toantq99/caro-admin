import { fetchGameHistorySuccess } from "@/actions/Profile";
import API_URL from "@/config/API";
import { columns } from "@/pages/Profile/GameHistory/tableCols";
import { Table } from "antd";
import Axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.scss";

const GameHistory = () => {
	const dispatch = useDispatch();
	const { info, gameHistory } = useSelector((state) => state.profile);
	const { push } = useHistory();
	useEffect(() => {
		Axios.get(API_URL + "/games/" + info.sub)
			.then((res) => dispatch(fetchGameHistorySuccess(res.data.games)))
			.catch(() => dispatch(fetchGameHistorySuccess([])));
	}, [dispatch, info.sub]);

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
				onRow={(game) => ({
					onClick: () => {
						push("/game-replay/" + game.id);
					},
				})}
			/>
		</div>
	);
};
export default GameHistory;
