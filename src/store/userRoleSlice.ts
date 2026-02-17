import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type UserRole = "default" | "guest" | "host";

interface UserRoleState {
    role: UserRole;
}

const initialState: UserRoleState = {
    role: "default",
};

const userRoleSlice = createSlice({
    name: "userRole",
    initialState,
    reducers: {
        setRole(state, action: PayloadAction<UserRole>) {
            state.role = action.payload;
        },
    },
});

export const { setRole } = userRoleSlice.actions;
export default userRoleSlice.reducer;
