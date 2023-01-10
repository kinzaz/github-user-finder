import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { GithubError, GitHubUser, LocalGithubUser } from 'types';
import axios from 'axios';
import { searchByName } from 'config';
import { extractLocalUser } from 'utils/extract-local-user';
import { isGithubUser } from 'utils/typeguards';
import { defaultUser } from 'mock';
import { Extra } from 'types/extra';

export const loadUserByName = createAsyncThunk<
	LocalGithubUser | null,
	string,
	{ extra: Extra }
>('@@user/load-user', async (name, { extra: { client, api } }) => {
	const { data } = await client.get(api.searchByName(name));

	if (isGithubUser(data)) {
		return extractLocalUser(data);
	} else {
		return null;
	}
});

interface UserState {
	entities: LocalGithubUser | null;
	loading: 'idle' | 'pending' | 'succeeded';
}

const initialState = {
	entities: defaultUser,
	loading: 'idle',
} as UserState;

const userSlice = createSlice({
	name: '@@user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loadUserByName.pending, state => {
				state.loading = 'pending';
			})
			.addCase(loadUserByName.fulfilled, (state, action) => {
				state.entities = action.payload;
				state.loading = 'succeeded';
			});
	},
});

export const userReducer = userSlice.reducer;
