import { useEffect, useState } from 'react';
import { LifeChild } from './LifeChild';

export const LifeApp = () => {
  const [info, setInfo] = useState(false);

  const [showAbout, setShowAbout] = useState(false);
  // COMPONNET DID MOUNT
  useEffect(() => {
    console.log('Component did mount - ozune geldi');

    window.addEventListener('online', function () {
      setInfo(false);
    });

    window.addEventListener('offline', function () {
      setInfo(true);
    });

    // const data = localStorage.getItem('key');
    // your logic....
  }, []);

  useEffect(() => {
    console.log('Component ozune geldi');

    // fetch("https://lorem.ipsum")//
    // const data = localStorage.getItem('key');
    // your logic....
  }, []);

  return (
    <div>
      <h1>Life App</h1>
      {info && <h2>Sebeke xetasi bas verdi!</h2>}
      <button onClick={() => setShowAbout((prev) => !prev)}>Toggle</button>

      {showAbout && <LifeChild />}
    </div>
  );
};
