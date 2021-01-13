import { fetchGameListSuccess } from "@/actions/Game";
import API_URL from "@/config/API";
import useAxios from "@/hooks/useAxios";
import { columns } from "@/pages/Game/GameTable/columns";
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

const GameTable = () => {
	const { list, shouldRefresh } = useSelector((state) => state.game);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const Axios = useAxios();

	useEffect(() => {
		setLoading(true);
		Axios.get(API_URL + "/games/getall")
			.then((res) => dispatch(fetchGameListSuccess(res.data)))
			.finally(() =>
				setTimeout(() => {
					setLoading(false);
				}, 500)
			);
	}, [Axios, dispatch, shouldRefresh]);

	return (
		<div className="game-table-wrapper">
			<h2>Danh sách trận đấu</h2>
			<Table
				loading={loading}
				bordered
				columns={columns}
				dataSource={list}
				pagination={{ pageSize: 10 }}
				rowKey={(game) => game.id}
			/>
		</div>
	);
};

export default GameTable;
