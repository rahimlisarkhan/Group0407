import { useState } from 'react';
import styles from './Todo.module.css';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
// import { TodoMode } from './TodoMode';
// import { TodoActions } from './TodoActions';

// CODE SPLIT
export default function Todo() {
  const [data, setData] = useState([]);

  return (
    <div>
      {/* {mode ? <h1>Todo</h1> : <h2>Todo Cinema</h2>} */}
      <h1>Todo</h1>

      {/* STATE MODE (array) */}
      <div className={styles.group}>
        <h2>State: array example</h2>

        <TodoInput todoData={data} onData={setData} />

        {/* <TodoList todoData={data} /> */}
        <TodoList todoData={data} />
        {/* <PokemonContent pokemonData={data} /> */}
      </div>
    </div>
  );
}
