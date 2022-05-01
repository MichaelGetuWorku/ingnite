import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api';

// Action creator
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upComing: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
