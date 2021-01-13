import { fetchProfileSuccess } from "@/actions/Profile";
import API_URL from "@/config/API";
import useRouter from "@/hooks/useRouter";
import GameHistory from "@/pages/Profile/GameHistory";
import UserInfo from "@/pages/Profile/UserInfo";
import UserTrophy from "@/pages/Profile/UserTrophy";
import { Spin } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./style.scss";

const Profile = () => {
	const dispatch = useDispatch();
	const { params } = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		Axios.get(API_URL + "/users/" + (params || {}).sub)
			.then((res) => dispatch(fetchProfileSuccess((res.data || {}).user)))
			.finally(() =>
				setTimeout(() => {
					setLoading(false);
				}, 1000)
			);
	}, [dispatch, params]);

	return (
		<Spin spinning={loading}>
			<div className="profile-wrapper">
				<UserTrophy />
				<UserInfo />

				<GameHistory />
			</div>
		</Spin>
	);
};

export default Profile;
