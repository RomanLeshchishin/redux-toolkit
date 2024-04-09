import axios from "axios";
import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => {
//     return async (dispatch: AppDispatch) => {
//         try {
//             dispatch(UserSlice.actions.usersFetching())
//             const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//             dispatch(UserSlice.actions.usersFetchingSuccess(response.data))
//         }
//         catch (e) {
//             dispatch(UserSlice.actions.usersFetchingError(e.message))
//         }
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
                async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
        }
    }
)
