import { Avatar, Button, Form, List, Skeleton } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import ViewsList from "../../../components/ViewsList";
import { AdminState, useAdminSelector } from "../../../store";
import { getManufactures } from "../../../store/modules/manufactures/actions";
import { selectManufacturesByIds } from "../../../store/modules/manufactures/selectors";
import { Manufacture } from "../../../store/modules/manufactures/types";
import Add from "../Add";
import EditForm from "./EditForm";

interface Props {
	getManufactures?: typeof getManufactures;
}

const Views = ({ getManufactures }: Props) => {
	return (
		<ViewsList
			addForm={<Add onAdded={() => {}} />}
			editForm={<EditForm />}
			getActions={getManufactures!}
			itemsSelectorByIds={selectManufacturesByIds}
			renderItem={(onEdit) => ({ id, name }: Manufacture) => (
				<List.Item
					actions={[
						<Button
							key="list-loadmore-edit"
							onClick={() => onEdit(id)}
						>
							Редагувати
						</Button>,
						<Button key="list-loadmore-more">Детальніше</Button>,
					]}
				>
					<List.Item.Meta
						avatar={
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						}
						title={
							<Link to={`/admin/views/manufactures/${id}`}>
								{name}
							</Link>
						}
					/>
				</List.Item>
			)}
		/>
	);
};

const mapDispatchToProps = { getManufactures };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Views);