// import Header from './common/components/Header';
// import CalendarHeader from './common/components/CalendarHeader';
// import { MemberList as MemberListAida } from './common/components/MemberList';
// import { MemberList } from './common/components/MemberList';

import { pokemonData } from './mock/pokemon';

// import productData from './mock/products.json';

// import Hero from './common/components/Hero';
// import { countries } from './common/constants/country';

function App() {
  // const addData = {
  //   str: 'str 1',
  // };

  function generateTeams() {
    console.log(pokemonData);

    const team1 = [...pokemonData];

    const team2 = [];

    while (team2 < team1) {
      console.log('intro...');

      const randomElementIndex = Math.floor(Math.random() * pokemonData.length);

      const silinenEl = team1.splice(randomElementIndex, 1);

      team2.push(silinenEl[0]);
    }

    const team1Score1 = team1.reduce(
      (sum, item) => sum + item.base_experience,
      0,
    );
    const team1Score2 = team2.reduce(
      (sum, item) => sum + item.base_experience,
      0,
    );

    return {
      team1,
      team2,
      team1Score1,
      team1Score2,
    };
  }

  const doneData = generateTeams();

  console.log('doneData', doneData);

  return (
    <section>
      {/* <PokemonTeam
        isWinner={doneData.team1Score1 > doneData.team1Score2}
        score={doneData.team1Score1}
        pokemons={doneData.team1}
      />
      <h1>VS</h1>
      <PokemonTeam
        isWinner={doneData.team1Score1 < doneData.team1Score2}
        score={doneData.team1Score2}
        pokemons={doneData.team2}
      /> */}
    </section>
  );
}

export default App;
