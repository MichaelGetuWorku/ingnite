import React from 'react';

//style
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ name, date, image }) => {
  return (
    <StyledGames>
      <h3>{name}</h3>
      <p>{date}</p>
      <img src={image} alt="" />
    </StyledGames>
  );
};

const StyledGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
