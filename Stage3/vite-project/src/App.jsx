import Header from './common/components/Header';
import CalendarHeader from './common/components/CalendarHeader';
// import { MemberList as MemberListAida } from './common/components/MemberList';
import { MemberList } from './common/components/MemberList';

function App() {
  const addData = {
    str: 'str 1',
  };

  return (
    <div>
      <Header />
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

      <MemberList age={12} siyahi={[1, 2, 3, 4]} address={addData} />
    </div>
  );
}

export default App;
