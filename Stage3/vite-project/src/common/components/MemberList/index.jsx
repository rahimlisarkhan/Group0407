// import Button from '../Button';
// import Header from '../Header';
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';

import Dropdown from 'react-bootstrap/Dropdown';

export function MemberList({ address, fullname = 'Default name', age }) {
  const addressDatasi = address.str;

  // const nameData = props.fullname || 'Default name';

  return (
    <div>
      <hr />
      <div>
        <h2>List: {fullname}</h2>
        <MemberItem />
        <MemberItem />
        <MemberItem />
        <MemberItem />
        <Button variant="danger">
          {addressDatasi} Send :{age}
        </Button>
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <hr />
    </div>
  );
}

function MemberItem() {
  return <div>Item n </div>;
}
