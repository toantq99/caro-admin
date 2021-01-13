import { fetchGameReplaySuccess } from "@/actions/GameReplay";
import API_URL from "@/config/API";
import useRouter from "@/hooks/useRouter";
import { Spin } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const GameReplay = () => {
	const dispatch = useDispatch();
	const { params } = useRouter();
	const [loading, setLoading] = useState(false);

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
			<div className="game-replay-wrapper">dasdadasd</div>;
		</Spin>
	);
};
export default GameReplay;
