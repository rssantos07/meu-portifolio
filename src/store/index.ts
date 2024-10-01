import { configureStore } from '@reduxjs/toolkit'
import { gitApi } from '../services/api'

export const store = configureStore({
  reducer: {
    // Adicionando o reducer da API ao store
    [gitApi.reducerPath]: gitApi.reducer // O reducer gerado pelo createApi
  },
  // Adicionando o middleware da API
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gitApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
