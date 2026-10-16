import TextHelper from '../../helpers/text';
import Button from '../Button';
// import './Header.css';
import styles from './Header.module.css';

function Header() {
  // const a = 10
  // const b = a + 10

  const text = 'Lorem Ipsum bla bla.';

  const result = TextHelper.truncate(text, 5);

  //   return <header className="header"> HEADER: {result}</header>;
  return (
    <header className={styles.header}>
      {' '}
      HEADER: {result}
      <Button text="Sign in" colo />
    </header>
  );
}

export default Header;
