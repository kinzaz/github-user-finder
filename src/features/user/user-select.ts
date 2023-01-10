import { RootState } from 'store';

export const selectUser = (state: RootState) => state.user.entities;
export const selectUserInfo = (state: RootState) => state.user;
