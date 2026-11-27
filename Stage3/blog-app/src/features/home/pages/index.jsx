import { Layout } from '../../../shared/components/Layout';
import { useGlobalStore } from '../../../shared/store/global/useGlobalStore';

const HomePage = () => {
  const { toggleTheme, theme } = useGlobalStore();

  const isDark = theme === 'dark';

  return (
    <Layout title="Home">
      <div
        style={{
          background: isDark ? '#1e1e1e' : '#ffffff',
          color: isDark ? '#ffffff' : '#1e1e1e',
          padding: 20,
        }}>
        <h1>Home Page</h1>
        <p>Blog app-a xoş gəlmisiniz!</p>

        <p>Hazırkı tema: {theme}</p>
        <button onClick={toggleTheme}>
          {isDark ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </Layout>
  );
};

export default HomePage;
