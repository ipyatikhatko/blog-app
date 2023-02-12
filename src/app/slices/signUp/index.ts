import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthApiError, AuthResponse } from '@supabase/supabase-js';
import { supabaseClient } from '../../../supabase';
import { RootState } from '../../store';

interface SignUpState {
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: AuthApiError | null;
}

const initialState: SignUpState = {
	loading: 'idle',
	error: null,
};

type SignUpFields = { username: string; email: string; password: string };
export const signUp = createAsyncThunk<
	AuthResponse,
	SignUpFields,
	{ rejectValue: AuthApiError }
>('user/signUp', async ({ username, email, password }, thunkApi) => {
	const response = await supabaseClient.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: 'https://example.com/confirmed',
			data: {
				email,
				username,
			},
		},
	});

	if (response.error) {
		const error = response.error as AuthApiError;
		return thunkApi.rejectWithValue(error);
	}

	return response;
});

const signUpSlice = createSlice({
	name: 'signUp',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(signUp.pending, (state) => {
			state.loading = 'pending';
			state.error = null;
		});
		builder.addCase(signUp.rejected, (state, action) => {
			state.loading = 'failed';
			state.error = action.payload || null;
		});
		builder.addCase(signUp.fulfilled, (state) => {
			state.loading = 'succeeded';
		});
	},
});

export const signUpReducer = signUpSlice.reducer;
export const signUpSelector = (state: RootState) => state.signUp;
