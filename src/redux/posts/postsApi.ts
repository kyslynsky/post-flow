import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost, IComment } from "../../interfaces";

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
    getCommentsByPostId: build.query<IComment[], number>({
      query: id => ({
        url: `comments?postId=${id}`,
        method: "GET",
      }),
      providesTags: ["Posts", "Comments"],
    }),
    addPost: build.mutation<IPost, Partial<IPost>>({
      query: body => ({
        url: `posts`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetCommentsByPostIdQuery,
  useAddPostMutation,
} = postsApi;
