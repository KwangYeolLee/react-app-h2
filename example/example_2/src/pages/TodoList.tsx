import { useState, useMemo, useCallback } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function TodoList() {
  // 상태 정의
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  // 할 일 추가 함수
  const addTodo = useCallback(() => {
    // TODO: text가 비어있지 않으면 새로운 todo 추가
    // setTodos(...) 사용
    // setText("") 로 입력창 비우기
  }, [text]);

  // 완료 토글 함수
  const toggleTodo = useCallback((id: number) => {
    // TODO: 해당 id의 todo.done 값을 반전시켜 업데이트
  }, []);

  // 완료된 개수 (useMemo 활용)
  const doneCount = useMemo(() => {
    // TODO: 완료된 todo 개수를 리턴
    return 0;
  }, [todos]);

  return (
    <div>
      <h1>✨ To-Do List</h1>

      {/* 입력창 + 버튼 */}
      <div>
        {/* TODO: 입력창과 버튼을 배치하고, 디자인은 학생들이 구성 */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>

      {/* 목록 */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* TODO: 완료된 항목은 스타일로 구분되도록 처리 */}
            <span>{todo.text}</span>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.done ? "취소" : "완료"}
            </button>
          </li>
        ))}
      </ul>

      {/* 완료 개수 */}
      <p>완료된 일: {doneCount}개</p>
    </div>
  );
}
