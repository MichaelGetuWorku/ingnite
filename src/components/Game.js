import React from 'react';
import { useDispatch } from 'react-redux';

//style
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { loadDetails } from '../actions/detailAction';
import { Link } from 'react-router-dom';

import { smallImage } from '../util';

const Game = ({ name, date, image, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetails(id));
  };
  return (
    <StyledGames onClick={loadDetailsHandler} layoutId={stringPathId}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{date}</p>
        <motion.img src={image} alt="" layoutId={`image ${stringPathId}`} />
      </Link>
    </StyledGames>
  );
};

const StyledGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
