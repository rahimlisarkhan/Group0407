import { useNavigate, useParams } from 'react-router-dom';
import { getBlogId } from '../services/blog.api';
import { Layout } from '../../../shared/components/Layout';
import { Loading } from '../../../shared/components/Loading';
import { Button } from '../../../shared/components/Button';
import { useGetData } from '../../../shared/hooks/useGetData';
import { NotFoundPage } from '../../notfound';

export const BlogDetail = () => {
  // useParams — URL-dəki dinamik hissəni (/meqale/:blogId) oxuyur
  const { blogId } = useParams();
  const navigate = useNavigate();

  const { data: blog, loading, error } = useGetData(() => getBlogId(blogId));

  if (loading) {
    return (
      <Layout title="Blog detail">
        <Loading loading />
      </Layout>
    );
  }

  if (error || !blog?.id) {
    return (
      <Layout title="Blog detail">
        <NotFoundPage />
      </Layout>
    );
  }

  return (
    <Layout title="Blog detail">
      <Button variant="outline" onClick={() => navigate('/meqale')}>
        ← Bloglara qayıt
      </Button>

      <article>
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
      </article>
    </Layout>
  );
};

export default BlogDetail;
