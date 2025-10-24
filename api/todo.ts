let todos = [
  { id: 1, text: '學 Vue 3' },
  { id: 2, text: '試試 Pinia Colada' },
]

// 模擬 GET /todos
export const fetchTodos = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(todos), 500)
  })
}

// 模擬 POST /todos
export const createTodoAPI = async (text: string) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const newTodo = { id: Date.now(), text }
      todos.push(newTodo)
      resolve(newTodo)
    }, 500)
  })
}
