import React from 'react';
import { useDispatch } from 'react-redux';

//style
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { loadDetails } from '../actions/detailAction';

const Game = ({ name, date, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
   
    dispatch(loadDetails(id));
  };
  return (
    <StyledGames onClick={loadDetailsHandler}>
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
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
