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
      <button onClick={handleChildHello}>Click Hello</button>
      <button onClick={handleWrite}>Click write</button>
    </div>
  );
};
