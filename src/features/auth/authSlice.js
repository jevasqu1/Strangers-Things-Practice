import api from "../../store/api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/users/register",
        method: "POST",
        body: { user: credentials },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: { user: credentials },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
