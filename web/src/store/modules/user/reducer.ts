import { createReducer } from "@reduxjs/toolkit";
import { authCreator, signInCreator, signOutCreator } from "./actions";
import { UserState } from "./types";

const initialState: UserState = {
	data: null,
	dataLoading: true,
};

const userReducer = createReducer(initialState, {
	[authCreator.pending.type]: (state, action) => {
		return { ...state, data: null, dataLoading: true };
	},
	[authCreator.fulfilled.type]: (state, action) => {
		return { ...state, data: action.payload.user, dataLoading: false };
	},
	[authCreator.rejected.type]: (state, action) => {
		return { ...state, data: null, dataLoading: false };
	},
	[signInCreator.fulfilled.type]: (state, action) => {
		return {
			...state,
			data: action.payload.user,
		};
	},
	[signOutCreator.fulfilled.type]: (state, action) => {
		return {
			...state,
			data: null,
		};
	},
});

export default userReducer;
