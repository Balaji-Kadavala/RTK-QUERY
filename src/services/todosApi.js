import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getAllTodos: build.query({
      query: () => `/todos`,
    }),
    addNewTodo: build.mutation({
      query:(newTodo)=>{
        return {
          url:"/todos",
          method:"POST",
          body:{...newTodo}
        }
      }
    }),
    updateTodo: build.mutation({
      query:(todo)=>{
        return {
          url:`/todos/${todo.id}`,
          method:"PUT",
          body:{...todo}
        }
      }
    }),
    deleteTodo: build.mutation({
      query:(id)=>{
        return {
          url:`/todos/${id}`,
          method:"DELETE"
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTodosQuery, useAddNewTodoMutation, useLazyGetAllTodosQuery, useUpdateTodoMutation, useDeleteTodoMutation } = todosApi;