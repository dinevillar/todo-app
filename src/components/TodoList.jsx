import TodoCard from "./TodoCard"

function TodoList(props) {
  const { todos, selectedTab } = props
  const filteredTodoList = selectedTab === 'All' ? 
    todos : selectedTab === 'Completed' ? 
      todos.filter(val => val.complete) : todos.filter(val => !val.complete)

  return (
    <>
      {filteredTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todoIndex={todos.findIndex(val => val.input == todo.input)} todo={todo} {...props} />
        )
      })}
    </>
  )
}
  
export default TodoList
  