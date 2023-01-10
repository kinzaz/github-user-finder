import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';

type ThemeType = 'dark' | 'light';

interface ThemeState {
	theme: ThemeType;
}

const initialState: ThemeState = {
	theme: 'light',
};

export const themeSlice = createSlice({
	name: '@@theme',
	initialState,
	reducers: {
		toggleTheme: (state, action: PayloadAction<ThemeType>) => {
			state.theme = action.payload;
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export const themeReducer = themeSlice.reducer;
