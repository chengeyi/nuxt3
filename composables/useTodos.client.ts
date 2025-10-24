// composables/useTodos.client.ts
import { useQuery } from '@pinia/colada'
import { fetchTodos } from '@/api/todo'

export function useTodosQuery() {
  const { data, isLoading, error } = useQuery({
    key: ['todos'],
    query: fetchTodos,
  })
  return { data, isLoading, error }
}
