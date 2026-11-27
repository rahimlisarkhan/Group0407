import { useNavigate } from 'react-router-dom';
import { getBlogs } from '../services/blog.api';
import { BlogCard } from '../components/BlogCard';
import { ContainerList } from '../../../shared/components/ContainerList';
import { ErrorMessage } from '../../../shared/components/ErrorMessage';
import { Loading } from '../../../shared/components/Loading';
import { Button } from '../../../shared/components/Button';
import { useHandleBoolean } from '../../../shared/hooks/useHandleBoolean';
import { useGetData } from '../../../shared/hooks/useGetData';
import styles from './BlogsPage.module.css';
import { Layout } from '../../../shared/components/Layout';
import { useGlobalStore } from '../../../shared/store/global/useGlobalStore';

export const BlogsPage = () => {
  // const [blogs, setBlogs] = useState([]);
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

  const { toggleTheme, theme } = useGlobalStore();

  const isDark = theme === 'dark';

  const navigate = useNavigate();

  const { data, loading, error } = useGetData(getBlogs);
  // const { data:products, loading:productLoading, errorProduct } = useGetData(getProducts);
  const { show, handleOpen, handleClose, handleToggle } = useHandleBoolean();

  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true);
  //     const response = await getBlogs();

  //     if (response.result) {
  //       // success logic...
  //       setBlogs(response.data);
  //       setLoading(false);

  //       return;
  //     }

  //     // error logic
  //     setError('Xeta bas verdi');
  //     setLoading(false);
  //   }

  //   getData();
  // }, []);

  return (
    <Layout title="Blog">
      <div
        style={{
          background: isDark ? '#1e1e1e' : '#ffffff',
          color: isDark ? '#ffffff' : '#1e1e1e',
          padding: 20,
        }}>
        <div className={styles.top}>
          <h2>Blog List</h2>

          <div>
            <button onClick={toggleTheme}>
              {isDark ? 'Light mode' : 'Dark mode'}
            </button>
            <Button onClick={() => navigate('/meqale/yarat')}>+ Create</Button>
          </div>
        </div>

        <div>
          <button onClick={handleOpen}>Məlumatı aç</button>
          <button onClick={handleClose}>Məlumatı bağla</button>
          <button onClick={handleToggle}>{show ? 'Gizlət' : 'Göstər'}</button>
        </div>

        {show && <p>Cəmi {data.length} blog tapıldı.</p>}

        <Loading loading={loading} />
        <ErrorMessage message={error} />

        <ContainerList>
          {data.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              body={blog.body}
              onReadMore={function () {
                navigate(`/meqale/${blog.id}`);
              }}
            />
          ))}
        </ContainerList>
      </div>
    </Layout>
  );
};

export default BlogsPage;
