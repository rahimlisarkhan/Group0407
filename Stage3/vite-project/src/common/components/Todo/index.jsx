import { useRef, useState } from 'react';
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

      {/* <TodoMode />

      <TodoActions /> */}
    </div>
  );
}

// const list = [1, function () {}];
// const meyve = ['alma', 'armud'];

// const [num, sayHello] = list;

// const m1 = meyve[0]
// const m2 = meyve[1];

// const [m1, m2] = meyve;

// const data = []

// function click(){
//     const value = inputEl.target.value

//     data.push(value);

//     renderList(data);
// }
