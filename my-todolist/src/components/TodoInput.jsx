import React, { useState } from "react";

function TodoInput({ addTodo }) {
  // [11장] 상태 관리: 입력 필드의 텍스트 상태
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
    // [11장] 상태 초기화 → addTodo 안의 setTodos와 함께 배칭 처리됨
    // → 실제 렌더링은 1번만 실행
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        className="flex-1 border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // [11장] 상태 갱신
        placeholder="할 일을 입력하세요"
      />
      <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg shadow transition-all">
        추가
      </button>
    </form>
  );
}

export default TodoInput;
