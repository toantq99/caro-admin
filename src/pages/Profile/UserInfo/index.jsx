import { Form, Input } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const UserInfo = () => {
	const {
		info: { email, created_at, displayName, name },
	} = useSelector((state) => state.profile);
	const [form] = Form.useForm();

	useEffect(() => {
		form.setFieldsValue({
			displayName: displayName || name,
			email,
			created_at: moment(new Date(created_at)).format("DD/MM/YYYY HH:mm"),
		});
	}, [email, created_at, displayName, name, form]);

	return (
		<div className="user-info-wrapper">
			<Form
				form={form}
				initialValues={{
					displayName: displayName || name,
					email,
					created_at: moment(new Date(created_at)).format("DD/MM/YYYY HH:mm"),
				}}
				layout="vertical"
			>
				<Form.Item
					name="displayName"
					label="Tên hiển thị"
					rules={[{ required: true }]}
				>
					<Input readOnly />
				</Form.Item>
				<Form.Item name="email" label="Email">
					<Input readOnly />
				</Form.Item>
				<Form.Item name="created_at" label="Ngày tham gia">
					<Input readOnly />
				</Form.Item>
			</Form>
		</div>
	);
};
export default UserInfo;
