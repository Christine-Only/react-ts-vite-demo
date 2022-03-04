import { useRef } from 'react';

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} />
      <button type="button" onClick={handleClick}>
        Focus Input
      </button>
    </>
  );
};

export default UseRef;
