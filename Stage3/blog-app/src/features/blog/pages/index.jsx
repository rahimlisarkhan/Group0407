import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blog.api';
import { BlogCard } from '../components/BlogCard';
import { ContainerList } from '../../../shared/components/ContainerList';
import { ErrorMessage } from '../../../shared/components/ErrorMessage';
import { Loading } from '../../../shared/components/Loading';

export const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await getBlogs();

      if (response.result) {
        // success logic...
        setBlogs(response.data);
        setLoading(false);

        return;
      }

      // error logic
      setError('Xeta bas verdi');
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <div>
      <h2>Blog List</h2>

      <Loading loading={loading} />
      <ErrorMessage message={error} />

      <ContainerList>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            body={blog.body}
          />
        ))}
      </ContainerList>
    </div>
  );
};
