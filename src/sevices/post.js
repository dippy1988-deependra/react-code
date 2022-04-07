import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),

    endpoints: (builder) => ({

        getAllPosts: builder.query({
            query: () => ({
                url: "posts?_limit=8",
                method: "GET"
            })
        }),
        getPostById: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                method: "GET"
            })
        }),
        createPost: builder.mutation({
            query: (userData) => {
                return {
                    url: `posts`,
                    method: "POST",
                    body:userData,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      },
                }
            }
        }),

        updatePost: builder.mutation({
            query: (updatePostData) => {
                console.log("updatePostData",updatePostData)
                const {id,...data} = updatePostData
                console.log("acctual updatePostData",data)
                return {
                    url: `posts/${id}`,
                    method: "PUT",
                    body:data,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      },
                }
            }
        })



    })
})

export const { useGetAllPostsQuery, useGetPostByIdQuery ,useCreatePostMutation,useUpdatePostMutation} = postApi