import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "e314d94ff9msh6b6de34ee386a62p179f4cjsn095dba5b430c"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/track",
    }),
    getSongByGenre: builder.query({
      query: (genre) => ``,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}`,
    }),
    getSongRelate: builder.query({
      query: ({ songid }) => `/songs/list-recommendations?key=${songid}`,
    }),
    // getArtistDetail: builder.query({
    //   query: (artistId) => `/artists/get-details?id=${artistId}`,
    // }),
    getArtistSummary: builder.query({
      query: (artistId) => `/artists/get-summary?id=${artistId}`,
    }),
    getSongBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelateQuery,
  useGetSongBySearchQuery,
  useGetArtistSummaryQuery,
} = shazamApi;
