import { fetchGameReplaySuccess } from "@/actions/GameReplay";
import API_URL from "@/config/API";
import useRouter from "@/hooks/useRouter";
import Board from "@/pages/GameReplay/Board";
import ChatArea from "@/pages/GameReplay/ChatArea";
import ControlStep from "@/pages/GameReplay/ControlStep";
import PlayerArea from "@/pages/GameReplay/PlayerArea";
import { Result, Spin } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

const GameReplay = () => {
	const dispatch = useDispatch();
	const { params } = useRouter();
	const [loading, setLoading] = useState(false);

	const { data } = useSelector((state) => state.gameReplay);

	useEffect(() => {
		setLoading(true);
		Axios.get(API_URL + "/games/by-id/" + (params || {}).id)
			.then((res) => dispatch(fetchGameReplaySuccess(res.data)))
			.finally(() =>
				setTimeout(() => {
					setLoading(false);
				}, 1000)
			);
	}, [dispatch, params]);

	return (
		<Spin spinning={loading}>
			{data ? (
				<div className="game-replay-wrapper">
					<div className="left">
						<PlayerArea />
					</div>
					<div className="center">
						<Board />
						<ControlStep />
					</div>
					<div className="right">
						<ChatArea />
					</div>
				</div>
			) : (
				<Result
					status="404"
					title="404"
					subTitle="Sorry, the page you visited does not exist."
				/>
			)}
		</Spin>
	);
};
export default GameReplay;
