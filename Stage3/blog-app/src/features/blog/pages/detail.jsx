import { useParams } from 'react-router-dom';
import { Header } from '../../../shared/components/Header';
import { useEffect } from 'react';

export const BlogDetail = () => {
  // useParams — URL-dəki dinamik hissəni (/meqale/:meqaleNomresi) oxuyur
  const { blogId } = useParams();

  useEffect(() => {
    console.log('blogId', blogId);

    async function getData() {
      // const response = await fetch(`/api/blogs-data/${blogId}`);
      // pass data to state logic
    }

    getData();
  }, [blogId]);

  return (
    <div>
      <Header />

      <h2>BlogDetail {blogId} </h2>
    </div>
  );
};
