import { NavLink } from 'react-router-dom';
import { FiBell, FiLock, FiSliders, FiUser } from 'react-icons/fi';
import { cls } from '../../../../shared/utils/cls';
import styles from './SettingBar.module.css';

const tabs = [
  { to: 'general', label: 'General', icon: FiSliders },
  { to: 'profile', label: 'Profile', icon: FiUser },
  { to: 'security', label: 'Security', icon: FiLock },
  { to: 'notifications', label: 'Notifications', icon: FiBell },
];

// Setting səhifəsinin sol nested bar-ı — nested route-lar arasında keçid
export const SettingBar = () => {
  return (
    <nav className={styles.bar}>
      {tabs.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => cls(styles.tab, isActive && styles.active)}
        >
          <Icon />
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
