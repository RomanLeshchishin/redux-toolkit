import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query({
            query: () => ({
                url: 'posts'
            })
        })
    })
})
