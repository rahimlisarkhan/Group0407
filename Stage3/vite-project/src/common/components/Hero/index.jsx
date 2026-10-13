import HeroImg from '../../../assets/hero.png';

export default function Hero({ children, data }) {
  const loading = false;

  const age = 12;

  console.log(data);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="content">
        Hero
        <hr />
        {children}
        <hr />
        {data.map((item) => (
          <div>
            <hr />
            <div>Country:{item.name}</div>
            <div>Prefix:{item.prefix}</div>
            <div>Code:{item.code}</div>
          </div>
        ))}
      </div>

      {age >= 18 ? (
        <img src={HeroImg} />
      ) : (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRt-bzdXBYuGrX4KiOJJnnahNnHL3paYKMVoTOwy8MkV_8XxgEWtbpTig&s=10" />
      )}
    </>
  );
}
