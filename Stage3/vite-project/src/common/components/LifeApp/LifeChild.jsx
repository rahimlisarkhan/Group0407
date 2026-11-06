import { useEffect, useLayoutEffect, useState } from 'react';

export const LifeChild = ({ age }) => {
  const [filanData, setFilanData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // COMPONENT WILL MOUNT
  // useLayoutEffect(() => {
  //   document.title = 'Yeni Ders';
  // }, []);

  // COMPONENT DID MOUNT
  useEffect(() => {
    console.log('Component LifeChild ucun mount oldu');

    function scrollLogic() {
      // ...
    }

    window.addEventListener('scroll', scrollLogic);

    // yaradilis logic....
    // COMPONENT UNMOUNT
    function cleanUp() {
      console.log('Component LifeChild silindi yox oldu');

      // nelerise silmek sondurmek clear etmek logic....

      window.removeEventListener('scroll', scrollLogic);
      localStorage.clear();
      // twilio.off()
    }

    return cleanUp;
  }, []);

  // COMPONENT DID MOUNT
  useEffect(() => {
    document.title = 'Yeni Ders';
  }, []);

  // COMPONENT DID MOUNT
  useEffect(() => {
    async function getMovies() {
      try {
        setError('');
        setLoading(true);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );

        const data = await response.json();

        setFilanData(data);
        setLoading(false);
      } catch (err) {
        setError('Xeta bas verdi');
        setLoading(false);
      }
    }

    // async function getMovieCategory() {
    //   const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/posts',
    //   );

    //   const data = await response.json();

    //   setFilanCategoryData(data);
    // }

    // getMovieCategory();
    getMovies();
  }, []);

  // COMPONENT UPDATED
  useEffect(() => {
    console.log('filanData.length: Component ozune geldi', filanData.length);

    if (filanData.length > 10) {
      // alert('Data is fill');
    }
  }, [filanData.length, age]);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    <h1>{error}</h1>;
  }

  return (
    <div>
      <hr />
      <h2>Life child</h2>
      <hr />

      {filanData.map((item) => (
        <div key={item.id} style={{ padding: 12, border: '1px solid #000000' }}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};
