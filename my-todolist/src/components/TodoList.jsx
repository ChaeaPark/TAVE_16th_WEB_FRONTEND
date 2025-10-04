import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <ul className="space-y-2 w-full">
      {todos.map((todo) => (
        // [12장] Fiber 아키텍처 → key로 구분된 각 TodoItem을
        // 기존 Fiber 트리(current tree)와 새로운 트리(workInProgress tree)에서 비교(diff)
        // 변경된 항목만 DOM에 commit됨
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
