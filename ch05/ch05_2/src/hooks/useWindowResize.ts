import { useState, useEffect } from "react";
import { useEventListener } from "./useEventListener";

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0]);
  useEffect(() => {
    setWidthHeight((_) => [window.innerWidth, window.innerHeight]);
  }, []); // 마운트 될 때 창 크기 설정
  useEventListener(window, "resize", () => {
    setWidthHeight((_) => [window.innerWidth, window.innerHeight]);
  });
  return widthHeight;
};
