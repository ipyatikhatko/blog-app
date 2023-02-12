import { createSlice } from '@reduxjs/toolkit';
import {
	AuthApiError,
	AuthError,
	AuthResponse,
	User,
} from '@supabase/supabase-js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabaseClient } from '../../../supabase';
import { RootState } from '../../store';

interface AuthState {
	isLoggedIn: boolean;
	user: User | null;
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: AuthApiError | AuthError | null;
}

const initialState: AuthState = {
	isLoggedIn: false,
	user: null,
	loading: 'idle',
	error: null,
};

export const signIn = createAsyncThunk<
	AuthResponse,
	{ email: string; password: string },
	{ rejectValue: AuthApiError }
>('user/signIn', async ({ email, password }, thunkApi) => {
	const response = await supabaseClient.auth.signInWithPassword({
		email,
		password,
	});

	if (response.error) {
		const error = response.error as AuthApiError;
		return thunkApi.rejectWithValue(error);
	}

	return response;
});

export const signOut = createAsyncThunk<
	{ error: AuthError | null },
	null,
	{ rejectValue: AuthError }
>('user/signOut', async (_, thunkApi) => {
	const response = await supabaseClient.auth.signOut();

	if (response.error) {
		return thunkApi.rejectWithValue(response.error);
	}

	return response;
});

const authSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(signIn.pending, (state) => {
			state.loading = 'pending';
			state.error = null;
		});
		builder.addCase(signIn.rejected, (state, action) => {
			state.loading = 'failed';
			state.error = action.payload || null;
		});
		builder.addCase(signIn.fulfilled, (state, action) => {
			state.loading = 'succeeded';
			state.isLoggedIn = true;
			state.user = action.payload.data.user;
		});

		builder.addCase(signOut.pending, (state) => {
			state.loading = 'pending';
		});
		builder.addCase(signOut.rejected, (state, action) => {
			state.loading = 'failed';
			state.error = action.payload || null;
		});
		builder.addCase(signOut.fulfilled, (state) => {
			state.isLoggedIn = false;
			state.loading = 'succeeded';
			state.user = null;
		});
	},
});

export const authReducer = authSlice.reducer;
export const authSelector = (state: RootState) => state.user;
