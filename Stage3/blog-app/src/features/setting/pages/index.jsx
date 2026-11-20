import { useCallback, useMemo, useState } from 'react';
import { Header } from '../../../shared/components/Header';

export const SettingPage = () => {
  // 1. State-lər
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isDark, setIsDark] = useState(false);

  const list = useMemo(() => {
    const result = [1, 2, 3, 4, 5, 6, count];

    return result;
  }, [count]);

  // const list = [1, 2, 3, 4, 5, 6, count];

  // 2. Handle funksiyaları — useCallback ilə
  // useCallback funksiyanın referansını yadda saxlayır.
  // Dependency dəyişmədikcə hər render-də yeni funksiya yaradılmır.

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleToggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  // 3. useMemo — hesablamanın NƏTİCƏSİNİ yadda saxlayır.
  // Yalnız `count` dəyişəndə yenidən hesablanır,
  // `name` və ya `isDark` dəyişəndə yox.
  const expensiveValue = useMemo(() => {
    console.log('expensiveValue hesablanır...');
    let total = 0;
    for (let i = 0; i < 1_000_000; i++) {
      total += count;
    }
    return total;
  }, [count]);

  // Yalnız `name` dəyişəndə yenidən hesablanır
  const upperName = useMemo(() => {
    console.log('upperName hesablanır...');
    return name.toUpperCase();
  }, [name]);

  // Yalnız `isDark` dəyişəndə yeni obyekt yaradılır
  const themeStyle = useMemo(
    () => ({
      background: isDark ? '#222' : '#fff',
      color: isDark ? '#fff' : '#222',
      padding: 20,
    }),
    [isDark],
  );

  return (
    <>
      <Header />

    <div style={themeStyle}>
      <h2>Setting Page — useMemo & useCallback</h2>

      <div>
        <p>Count: {count}</p>
        <p>Expensive value: {expensiveValue}</p>
        <button onClick={handleIncrement}>+1</button>
      </div>

      <div>
        <input
          value={name}
          onChange={handleNameChange}
          placeholder="Ad yaz..."
        />
        <p>Upper name: {upperName}</p>
      </div>

      <div>
        <button onClick={handleToggleTheme}>
          {isDark ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </div>
    </>
  );
};
