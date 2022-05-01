const initState = {
  game: {},
  screen: {},
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GAME_DETAIL':
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
