import axios from 'axios';
import { gameDetailsURL, gameScreenShotURL } from '../api';

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  });
  
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenShotURL(id));

  dispatch({
    type: 'GAME_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
