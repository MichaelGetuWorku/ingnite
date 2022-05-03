import React, { useState } from 'react';

//styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';

//redux and routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  console.log(textInput);
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  const clearSearch = (e) => {
    dispatch({ type: 'CLEAR_SEARCH' });
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearch}>
        <img src={logo} alt="ignite" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input onChange={inputHandler} type="text" value={textInput} />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  h1 {
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    font-size: 5rem;
    color: #ff7676;
  }
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 1rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-weight: lighter;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  align-items: center;
  img {
    width: 5rem;
    height: 5rem;
  }
`;
export default Nav;
