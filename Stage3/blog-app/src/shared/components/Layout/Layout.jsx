import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  FiArrowLeft,
  FiFeather,
  FiFileText,
  FiHome,
  FiSettings,
} from 'react-icons/fi';
import { cls } from '../../utils/cls';
import styles from './Layout.module.css';

const menu = [
  { to: '/', label: 'Home', icon: FiHome },
  { to: '/meqale', label: 'Bloglar', icon: FiFileText },
  { to: '/setting', label: 'Settings', icon: FiSettings },
];

// Standart panel: solda navbar, sağda yuxarıda header, altında main (children)
// small — navbar dar olur, yalnız iconlar görünür
export const Layout = ({ title, small = false, children }) => {
  const navigate = useNavigate();

  // const { pathname } = useLocation();

  // const isCalendarPage = pathname == '/calendar';

  return (
    <div className={styles.layout}>
      <aside className={cls(styles.sidebar, small && styles.small)}>
        <span className={styles.logo} onClick={() => navigate('/')}>
          <FiFeather className={styles.icon} />
          {!small && 'BlogApp'}
        </span>

        {/* {isCalendarPage && <CalendarComponent/>} */}

        <nav className={styles.nav}>
          {menu.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              title={small ? label : undefined}
              className={({ isActive }) =>
                cls(styles.link, isActive && styles.active)
              }>
              <Icon className={styles.icon} />
              {!small && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className={styles.content}>
        <header className={styles.header}>
          <button className={styles.back} onClick={() => navigate(-1)}>
            <FiArrowLeft /> Geri
          </button>
          <h2 className={styles.title}>{title}</h2>
        </header>

        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};
