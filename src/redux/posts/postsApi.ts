import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../interfaces";

export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Posts", "Comments"],
  endpoints: build => ({
    getAllPosts: build.query<IPost[], void>({
      query: () => ({
        url: `posts`,
        method: "GET",
      }),
      providesTags: ["Posts"],
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
