import React, { useState } from "react";

function TodoItem({ todo, updateTodo, deleteTodo }) {
  // [11장] 상태 관리: 개별 Todo의 편집 모드 상태
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    updateTodo(todo.id, newText); // [11장] 상태 갱신
    setIsEditing(false); // [11장] 상태 갱신 (배칭 처리됨)
  };

  return (
    <li className="flex justify-between items-center bg-sky-50 border border-sky-200 p-3 rounded-lg shadow hover:bg-sky-100 transition-all">
      {isEditing ? (
        <input
          className="border px-2 py-1 rounded"
          value={newText}
          onChange={(e) => setNewText(e.target.value)} // [11장] 상태 갱신
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div className="space-x-2">
        {isEditing ? (
          <button className="text-green-600 font-medium" onClick={handleSave}>
            저장
          </button>
        ) : (
          <button
            className="text-yellow-600 font-medium"
            onClick={() => setIsEditing(true)} // [11장] 상태 갱신
          >
            수정
          </button>
        )}
        <button
          className="text-red-600 font-medium"
          onClick={() => deleteTodo(todo.id)} // [11장] 상태 갱신
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
