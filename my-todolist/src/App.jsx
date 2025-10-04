import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // [11장] 상태(state) 관리: todos만 있으면 충분함
  const [todos, setTodos] = useState([]);

  // LocalStorage에서 초기 데이터 불러오기
  // [11장] 상태의 초기값 설정
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos"));
    if (stored) setTodos(stored);
  }, []);

  // 상태(todos)가 바뀔 때마다 LocalStorage에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // [11장] 상태 업데이트 (배칭 예시: setTodos + TodoInput 안의 setText)
  // 여러 상태가 한 이벤트 안에서 바뀌더라도 React 18 자동 배칭 → 렌더링 1번만 발생
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  // [11장] 상태 갱신: 특정 Todo의 text 수정
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // [11장] 상태 갱신: 특정 Todo 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          My Todo List
        </h1>
        <TodoInput addTodo={addTodo} />
        {/* [12장] Fiber 아키텍처 → TodoList로 상태 전달,
            Fiber가 트리 비교(diff) 후 변경된 TodoItem만 DOM에 반영 */}
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
