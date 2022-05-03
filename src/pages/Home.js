import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';

import { loadGames } from '../actions/gamesAction';
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  console.log(pathId);
  /* Fetching the Games from the API. */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  /* Destructuring the values from state.games object. */
  const { popular, newGames, upComing, searched } = useSelector(
    (state) => state.games
  );
  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
          <h2>Looking for this</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  date={game.released}
                  name={game.name}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ''
        )}

        <h2>Upcoming Games</h2>
        <Games>
          {upComing.map((game) => (
            <Game
              date={game.released}
              name={game.name}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              date={game.released}
              name={game.name}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              date={game.released}
              name={game.name}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: Grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
