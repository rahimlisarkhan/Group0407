import { useState } from 'react';

export const TodoList = ({ todoData }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prevShow) => {
      // ... logic

      const newShow = !prevShow;

      return newShow;
    });
  };

  return (
    <div>
      <button onClick={handleShow}>Show</button>
      {show ? (
        <ul>
          {todoData.map((item, index) => (
            <li key={`todo-element-${index}`}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>More show</p>
      )}
    </div>
  );
};
