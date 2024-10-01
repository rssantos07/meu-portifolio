import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gitApi = createApi({
  reducerPath: 'gitApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users/rssantos07/repos'
    })
  })
})

// Exportando hooks gerados automaticamente para os endpoints
export const { useGetUsersQuery } = gitApi
