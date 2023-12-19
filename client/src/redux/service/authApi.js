import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (payload) => ({
        url: "/auth/signUp",
        method: "post",
        data: payload,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: ["auth"],
    }),
    login: build.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "post",
        data: payload,
        contentType: "application/json",
      }),
      invalidatesTags: ["auth"],
    }),
    changePassword: build.mutation({
      query: (payload) => ({
        url: "/auth/change-password",
        method: "post",
        data: payload,
        contentType: "application/json",
      }),
      invalidatesTags: ["auth"],
    }),
    updateProfile: build.mutation({
      query: (payload) => ({
        url: "/auth/update-profile",
        method: "patch",
        data: payload,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: ["auth"],
    }),
    getUser: build.query({
      query: () => ({
        url: "/auth/get-user",
        method: "get",
      }),
      providesTags: ["auth"],
    }),
    deleteUser: build.mutation({
      query: (payload) => ({
        url: `/users/delete-user/${payload?._id}`,
        method: "delete",
      }),
      providesTags: ["auth"],
    }),
    getUsers: build.query({
      query: () => ({
        url: "/users/get-users",
        method: "get",
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useGetUserQuery,
  useChangePasswordMutation,
  useUpdateProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
} = userApi;
