import { useRef, useState, createRef } from 'react';

const UseRef = () => {
  const refFromCreateRef = createRef();
  const refFromUseRef = useRef<number>();
  const [count, setCount] = useState(1);

  if (!refFromCreateRef.current) {
    refFromCreateRef.current = count;
  }

  if (!refFromUseRef.current) {
    refFromUseRef.current = count;
  }

  return (
    <>
      <div>当前值：{count}</div>
      <div>refFromCreateRef：{refFromCreateRef.current}</div>
      <div>refFromUseRef：{refFromUseRef.current}</div>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        重新渲染
      </button>
    </>
  );
};

export default UseRef;
