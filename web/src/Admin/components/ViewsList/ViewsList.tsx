import { Avatar, Button, List, Skeleton } from "antd";
import React, { useEffect } from "react";
import { AdminState, useAdminSelector } from "../../store";
import { useLocationField } from "react-location-query";
import classes from "./ViewsList.module.scss";
import Add from "./Add";
import Edit from "./Edit";

interface Props {
	getActions: (page: number, limit?: number) => any;
	itemsSelector: (state: AdminState) => any[];
	renderItem: (
		onEdit: (id: string) => void
	) => (props: any) => React.ReactNode;

	addForm: JSX.Element;
	editForm: JSX.Element;
}

const ViewsList = ({
	getActions,
	itemsSelector,
	renderItem,
	addForm,
	editForm,
}: Props) => {
	useEffect(() => {
		getActions!(1);
	}, []);
	const items = useAdminSelector(itemsSelector!);

	const [, setAdd] = useLocationField("add", {
		type: "boolean",
		initial: false,
		hideIfInitial: true,
	});

	const [, setEdit] = useLocationField("edit", {
		type: "string",
		initial: "",
		hideIfInitial: true,
	});

	return (
		<>
			<List
				style={{ width: "100%", height: "100%", background: "white" }}
				loading={false}
				dataSource={items}
				loadMore={
					<div className={classes.addWrapper}>
						<Button onClick={() => setAdd(true)}>Додати</Button>
					</div>
				}
				renderItem={renderItem((id) => setEdit(id))}
			/>
			<Add form={addForm} />
			<Edit form={editForm} />
		</>
	);
};

export default ViewsList;
