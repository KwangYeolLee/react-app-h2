import { useState, useEffect, useMemo, useCallback } from "react";

export default function Stopwatch() {
  // 🟢 상태
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  // 🟢 핸들러 (아래에서 구현)
  const start = useCallback(() => {
    // TODO: running을 true로
  }, []);

  const pause = useCallback(() => {
    // TODO: running을 false로
  }, []);

  const reset = useCallback(() => {
    // TODO: running false + seconds 0으로
  }, []);

  // 🟢 타이머 동작 (아래 useEffect에서 구현)

  // 🟢 표시 문자열 (mm:ss)
  const display = useMemo(() => {
    // TODO:
    // 1) 분 = Math.floor(seconds / 60)
    // 2) 초 = seconds % 60
    // 3) 두 자리로 맞추기: String(n).padStart(2, "0")
    // 4) "mm:ss"로 반환
    return "00:00";
  }, [seconds]);

  return (
    <div className="w-full flex flex-col items-center p-6">
      <div className="w-80 p-4 border rounded">
        <h1 className="text-xl font-bold mb-2">⏱ Stopwatch</h1>

        {/* 시간 표시 */}
        <div className="mb-2" style={{ fontSize: 40, textAlign: "center" }}>
          {display}
        </div>

        {/* 버튼들 */}
        <div className="mb-2" style={{ textAlign: "center" }}>
          {/* gap 대신 margin-right로 간격 */}
          <button className="btn btn-primary mr-2" onClick={start}>
            시작
          </button>
          <button className="btn btn-outline mr-2" onClick={pause}>
            일시정지
          </button>
          <button className="btn" onClick={reset}>
            리셋
          </button>
        </div>

        {/* 상태 표시(선택) */}
        <p className="text-sm" style={{ textAlign: "center" }}>
          상태: {running ? "동작 중" : "정지"}
        </p>
      </div>
    </div>
  );
}
