const initState = {
  popular: [],
  newGames: [],
  upComing: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHGAMES':
      return { ...state };
    default:
      return { ...state };
  }
};

export default gamesReducer;
