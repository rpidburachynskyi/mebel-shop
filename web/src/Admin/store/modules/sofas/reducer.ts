import { createReducer } from "@reduxjs/toolkit";
import { addSofaCreator, AddSofaFullfiledAction } from "./actions/addSofa";
import { getSofaCreator } from "./actions/getSofa";
import { getSofasCreator } from "./actions/getSofas";
import { GetSofaFullfiledAction } from "./actions/getSofa";
import { saveSofaCreator } from "./actions/saveSofa";
import { Sofa, SofasState } from "./types";

const initialState: SofasState = {
	sofas: {},
	sofasNumbers: 0,
};

export const sofasReducer = createReducer(initialState, {
	[addSofaCreator.fulfilled.type]: (
		state,
		action: AddSofaFullfiledAction
	) => {
		const { sofa, sofasNumbers } = action.payload;
		return {
			...state,
			sofas: {
				...state.sofas,
				[sofa.id]: sofa,
			},
			sofasNumbers: sofasNumbers + 1,
		};
	},
	[getSofasCreator.fulfilled.type]: (state, action) => {
		return {
			...state,
			sofas: action.payload.sofas.reduce(
				(p: object, c: Sofa) => ({ ...p, [c.id]: c }),
				{}
			),
			sofasNumbers: action.payload.count,
		};
	},
	[getSofaCreator.fulfilled.type]: (
		state,
		action: GetSofaFullfiledAction
	) => {
		const { sofa } = action.payload;
		return {
			...state,
			sofas: {
				...state.sofas,
				[sofa.id]: sofa,
			},
		};
	},
	[saveSofaCreator.fulfilled.type]: (state, action) => {
		const { sofa } = action.payload;
		console.log(action.payload);
		return {
			...state,
			sofas: {
				...state.sofas,
				[sofa.id]: sofa,
			},
		};
	},
});