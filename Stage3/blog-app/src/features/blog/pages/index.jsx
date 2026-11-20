import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBlogs } from '../services/blog.api';
import { BlogCard } from '../components/BlogCard';
import { ContainerList } from '../../../shared/components/ContainerList';
import { ErrorMessage } from '../../../shared/components/ErrorMessage';
import { Loading } from '../../../shared/components/Loading';
import { Header } from '../../../shared/components/Header';
import { Button } from '../../../shared/components/Button';
import { useHandleBoolean } from '../../../shared/hooks/useHandleBoolean';
import { useGetData } from '../../../shared/hooks/useGetData';
import styles from './BlogsPage.module.css';

export const BlogsPage = () => {
  // const [blogs, setBlogs] = useState([]);
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

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
    <div>
      <Header />

      <div className={styles.top}>
        <h2>Blog List</h2>

        <Button onClick={() => navigate('/meqale/yarat')}>+ Create</Button>
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
  );
};
