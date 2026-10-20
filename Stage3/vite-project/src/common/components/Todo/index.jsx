import { useRef, useState } from 'react';
import styles from './Todo.module.css';
import { classMerge } from '../../helpers/classMerge';

export default function Todo() {
  const [count, setCount] = useState(10); // number
  const [mode, setMode] = useState(false); // boolean
  const [data, setData] = useState([]);

  const inputRef = useRef();

  function handleInc() {
    const newCount = count + 1; // new

    setCount(newCount);
  }

  function handleDec() {
    const newCount = count - 1; // new

    setCount(newCount);
  }

  function handleMode() {
    // const newMode = mode == false ? true : false;
    const newMode = !mode;

    setMode(newMode);
  }

  function handleAddTodo() {
    const value = inputRef.current.value;

    if (value.trim() == '') {
      alert('Empty field');
      return;
    }

    const newData = [value, ...data];

    setData(newData);

    inputRef.current.value = '';
  }

  return (
    <div>
      {mode ? <h1>Todo</h1> : <h2>Todo Cinema</h2>}

      {/* STATE MODE (array) */}
      <div className={styles.group}>
        <h2>State: array example</h2>
        <div>
          <input ref={inputRef} />
          <button onClick={handleAddTodo}>Add</button>
        </div>

        <ul>
          {data.map((item, index) => (
            <li key={`todo-element-${index}`}>{item}</li>
          ))}
        </ul>

        {/* <PokemonContent pokemonData={data} /> */}
      </div>

      {/* STATE MODE (boolean) */}
      <div className={styles.group}>
        <h2>State: boolean example</h2>
        <button onClick={handleMode}> {mode ? 'Light' : 'Dark'} mode</button>
        <div
          // className={`${styles.box} ${mode ? styles.box_bg_dark : ''}`}
          className={classMerge(styles.box, mode && styles.box_bg_dark)}></div>
      </div>

      {/* STATE COUNT (numbers) */}
      <div className={styles.group}>
        <h2>State: number example</h2>
        <button onClick={handleDec}>-</button>
        <span>{count}</span>
        <button onClick={handleInc}>+</button>
      </div>
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
