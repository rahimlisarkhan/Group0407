import { useState } from 'react';
import { classMerge } from '../../helpers/classMerge';
import styles from './Todo.module.css';

export const TodoMode = () => {
  const [mode, setMode] = useState(false); // boolean

  function handleMode() {
    // const newMode = mode == false ? true : false;
    const newMode = !mode;

    setMode(newMode);
  }
  return (
    <div className={styles.group}>
      <h2>State: boolean example</h2>
      <button onClick={handleMode}> {mode ? 'Light' : 'Dark'} mode</button>
      <div
        // className={`${styles.box} ${mode ? styles.box_bg_dark : ''}`}
        className={classMerge(styles.box, mode && styles.box_bg_dark)}></div>
    </div>
  );
};
