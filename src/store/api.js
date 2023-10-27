import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = `https://strangers-things.herokuapp.com/api/2309-FSA-ET-WEB-FT-SF`;

/**This is the central API slice into which all endpoints will be injected */

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});

export default api;
