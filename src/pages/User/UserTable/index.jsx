import { fetchUserListSuccess, refreshUserList } from "@/actions/User";
import API_URL from "@/config/API";
import { columns } from "@/pages/User/UserTable/columns";
import { Input, message, Modal, Table } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.scss";

const checkMatchSearch = (user, value) => {
	const { displayName, email } = user;
	const v = value.toLowerCase();
	return (
		displayName.toLowerCase().includes(v) || email.toLowerCase().includes(v)
	);
};

const UserTable = () => {
	const { list, shouldRefresh } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [filteredList, setFilteredList] = useState([]);
	const [loading, setLoading] = useState(false);
	const { push } = useHistory();

	useEffect(() => {
		setFilteredList(list);
	}, [list]);

	useEffect(() => {
		setLoading(true);
		Axios.get(API_URL + "/users/getall")
			.then((res) => dispatch(fetchUserListSuccess(res.data)))
			.finally(() =>
				setTimeout(() => {
					setLoading(false);
				}, 500)
			);
	}, [dispatch, shouldRefresh]);

	const handleBlockUser = (user) => {
		Modal.confirm({
			title: "Block " + user.displayName,
			onOk: () => {
				Axios.post(API_URL + "/users/lock", { sub: user.sub })
					.then(() => {
						message.success("Block success");
						dispatch(refreshUserList());
					})
					.catch(() => message.error("Server Error"));
			},
		});
	};

	const handleUnblockUser = (user) => {
		Modal.confirm({
			title: "Unblock " + user.displayName,
			onOk: () => {
				Axios.post(API_URL + "/users/unlock", { sub: user.sub })
					.then(() => {
						message.success("Unblock success");
						dispatch(refreshUserList());
					})
					.catch(() => message.error("Server Error"));
			},
		});
	};

	const redirectProfile = (user) => {
		push("/profile/" + user.sub);
	};

	return (
		<div className="user-table-wrapper">
			<div className="title">
				<h2>List User</h2>
				<Input.Search
					onSearch={(value) =>
						setFilteredList(
							list.filter((room) => checkMatchSearch(room, value))
						)
					}
					name="search"
					className="search-input"
				/>
			</div>
			<Table
				loading={loading}
				bordered
				columns={columns({
					handleUnblockUser,
					handleBlockUser,
					redirectProfile,
				})}
				dataSource={filteredList}
				pagination={{ pageSize: 20 }}
				rowKey={(room) => room.id}
				onRow={(room) => ({
					onClick: () => {},
				})}
			/>
		</div>
	);
};

export default UserTable;
