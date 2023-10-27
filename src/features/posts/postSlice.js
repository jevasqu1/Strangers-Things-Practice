import api from "../../store/api";

const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
      //We transform this according to the shape of the data that the API sends back.
      //This matches what we passed into `setPosts` in Posts.jsx
      //before the refactor to RTK query
      transformResponse: (response) => response.data.posts,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
