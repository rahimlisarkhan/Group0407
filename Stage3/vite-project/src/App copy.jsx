// import Header from './common/components/Header';
// import CalendarHeader from './common/components/CalendarHeader';
// import { MemberList as MemberListAida } from './common/components/MemberList';
// import { MemberList } from './common/components/MemberList';

// import productData from './mock/products.json';

// import Hero from './common/components/Hero';
// import { countries } from './common/constants/country';
import { Child } from './common/components/Child';

function App() {
  // const addData = {
  //   str: 'str 1',
  // };

  const sayHello = (childangelenData) => {
    console.log('Hello!', childangelenData);

    const sum = 22 + childangelenData;

    alert(sum);
  };

  const id = '001';

  return (
    <section>
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
        width={200}
        height={200}
      />
      <Child sayHello={sayHello} />
      {/* <Hero data={countries}>
        <h2>Salam</h2>
        <h2>Salam</h2>
        <h2>Salam</h2>
        <h2>Salam</h2>
        <h2>Salam</h2>
        <h2>Salam</h2>
      </Hero> */}

      {/* <Header />
      <CalendarHeader />
      <h1>Hello React</h1>

      <hr />
      <MemberList
        age={12}
        fullname="John doe"
        siyahi={[1, 2, 3, 4]}
        address={addData}
      />
      <hr />

      <MemberList age={12} siyahi={[1, 2, 3, 4]} address={addData} /> */}
    </section>
  );
}

export default App;
