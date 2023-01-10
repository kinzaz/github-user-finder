import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { themeReducer } from 'features/theme/theme-slice';
import * as api from 'config';
import { userReducer } from 'features/user/user-slice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		user: userReducer,
	},
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

