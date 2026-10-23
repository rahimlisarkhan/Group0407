import { useRef } from 'react';

export const TodoInput = ({ todoData = [], onData }) => {
  const inputRef = useRef();

  function handleAddTodo() {
    const value = inputRef.current.value;

    if (value.trim() == '') {
      alert('Empty field');
      return;
    }

    const newData = [value, ...todoData];

    onData(newData);

    inputRef.current.value = '';
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};
