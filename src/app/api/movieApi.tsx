import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "db95773a7fb212ba790d71f6adac0e7e";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (url) => `${url}&api_key=${API_KEY}`,
    }),
    searchMovies: builder.query({
      query: (query) => `/search/movie?query=${query}&api_key=${API_KEY}`,
    }),
  }),
});

export const { useGetMoviesQuery, useSearchMoviesQuery } = moviesApi;
