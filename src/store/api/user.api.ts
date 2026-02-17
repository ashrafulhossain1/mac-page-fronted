import { baseApi } from ".";
import type { TUser, APIResponse } from "@/types/user.d";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMe: builder.query<TUser, void>({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
            providesTags: ["User"],
            transformResponse: (response: APIResponse<TUser>) => response.data,
        }),
        updateProfile: builder.mutation<TUser, Partial<TUser>>({
            query: (data) => ({
                url: "/user/me",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["User"],
            transformResponse: (response: APIResponse<TUser>) => response.data,
        }),
        uploadPhoto: builder.mutation<{ key: string; url: string }, FormData>({
            query: (formData) => ({
                url: "/media/upload",
                method: "POST",
                body: formData,
            }),
            transformErrorResponse: (response) => response.data,
        }),
    }),
});

export const { useGetMeQuery, useUpdateProfileMutation, useUploadPhotoMutation } = userApi;
