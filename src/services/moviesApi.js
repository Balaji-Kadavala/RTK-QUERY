import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3600' }),
  endpoints: (build) => ({
    getAllMovies: build.query({
      query: () => `/movies-data`,
    })
  }),
})
 
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllMoviesQuery } = moviesApi;