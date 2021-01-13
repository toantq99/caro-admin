import { fetchProfileSuccess } from "@/actions/Profile";
import LoadingIndicator from "@/components/LoadingIndicator";
import API_URL from "@/config/API";
import useAxios from "@/hooks/useAxios";
import useRouter from "@/hooks/useRouter";
import GameHistory from "@/pages/Profile/GameHistory";
import UserInfo from "@/pages/Profile/UserInfo";
import UserTrophy from "@/pages/Profile/UserTrophy";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./style.scss";

const Profile = () => {
	const dispatch = useDispatch();
	const { params } = useRouter();
	const [loading, setLoading] = useState(false);
	const Axios = useAxios();

	useEffect(() => {
		setLoading(true);
		Axios.get(API_URL + "/users/" + (params || {}).sub)
			.then((res) => dispatch(fetchProfileSuccess((res.data || {}).user)))
			.finally(() =>
				setTimeout(() => {
					setLoading(false);
				}, 1000)
			);
	}, [Axios, dispatch, params]);

	return loading ? (
		<LoadingIndicator />
	) : (
		<div className="profile-wrapper">
			<UserTrophy />
			<UserInfo />

			<GameHistory />
		</div>
	);
};

export default Profile;
