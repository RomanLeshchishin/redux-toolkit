import {IUser} from "../../models/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators.ts";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchUsers.fulfilled,
            (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload;
            }
        );

        builder.addCase(
            fetchUsers.pending,
            (state) => {
                state.isLoading = true;
            }
        );

        // @ts-ignore
        builder.addCase(
            fetchUsers.rejected,
            (state, action: PayloadAction<string> ) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        );
    }
})

export default UserSlice.reducer;
