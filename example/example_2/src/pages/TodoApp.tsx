import { useState, useEffect, useMemo, useCallback } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  // 🟢 TODO 1: 새로운 할 일 추가 함수 작성 (useCallback)
  const addTodo = useCallback(() => {
    // 작성 필요
  }, [text]);

  // 🟢 TODO 2: 완료 상태 토글 함수 작성 (useCallback)
  const toggleTodo = useCallback((id: number) => {
    // 작성 필요
  }, []);

  // 🟢 TODO 3: 로컬스토리지 저장/불러오기 (useEffect)
  useEffect(() => {
    // 마운트 시 불러오기
    // todos 변경 시 저장하기
  }, [todos]);

  // 🟢 TODO 4: 완료된 개수 계산 (useMemo)
  const doneCount = useMemo(() => {
    // 작성 필요
    return 0;
  }, [todos]);

  return (
    <div className="w-full p-4 flex flex-col items-center">
      <div className="w-80">
        <h1 className="text-2xl font-bold mb-4">✨ To-Do List</h1>

        {/* 입력창 */}
        <div className="flex gap-2 mb-4">
          <input
            className="input input-bordered flex-1"
            placeholder="할 일을 입력하세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTodo}>
            추가
          </button>
        </div>

        {/* 목록 */}
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`p-2 border rounded flex justify-between items-center mb-2 ${
                todo.done ? "bg-green-100 line-through" : "bg-white"
              }`}
            >
              <span>{todo.text}</span>
              <button
                className="btn btn-xs btn-outline"
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.done ? "취소" : "완료"}
              </button>
            </li>
          ))}
        </ul>

        {/* 완료 개수 */}
        <p className="mt-4 text-sm text-gray-600">완료된 일: {doneCount}개</p>
      </div>
    </div>
  );
}
