import { useState } from 'react';
import styles from './Todo.module.css';

export const TodoActions = () => {
  const [count, setCount] = useState(10); // number

  function handleInc() {
    // const newCount = count + 1; // new

    // setCount(newCount);
    setCount((prev) => prev + 1);
  }

  function handleDec() {
    // const newCount = count - 1; // new

    // setCount(newCount);

    setCount((prev) => prev - 1);
  }

  return (
    <div className={styles.group}>
      <h2>State: number example</h2>
      <button onClick={handleDec}>-</button>
      <span>{count}</span>
      <button onClick={handleInc}>+</button>
    </div>
  );
};
