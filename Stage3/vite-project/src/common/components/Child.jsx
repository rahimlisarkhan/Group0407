import Button from './Button';
import BellIcon from '../../assets/icons/Bell.svg?react';
import { FaUserAlt as UserIcon } from 'react-icons/fa';

export const Child = (props) => {
  console.log(props);

  const handleWrite = () => {
    console.log('Writing...');
  };

  const handleChildHello = () => {
    const age = 21;

    props.sayHello(age);

    console.log('child hello');
  };

  return (
    <div>
      <hr />
      Child1
      <button
        // className=''
        style={{
          color: 'red',
        }}
        onClick={handleChildHello}>
        Click Hello
      </button>
      <BellIcon />
      <UserIcon />
      <button onClick={handleWrite}>Click write</button>
      <Button className color="red">
        Click me
      </Button>
    </div>
  );
};
