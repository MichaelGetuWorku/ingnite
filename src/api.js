const KEY = `32e0909623834879b8a23bf5956bf2a9`;
//games?key=32e0909623834879b8a23bf5956bf2a9
const base_url = ` https://api.rawg.io/api/`;

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDate = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_sizing=10`;

const upcoming_games = `games?key=${KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_sizing=10`;

const new_games = `games?key=${KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_sizing=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//Game Details
/**
 * It takes a game_id as an argument and returns a URL that can be used to fetch game details from the
 * IGDB API
 * @param game_id - The ID of the game you want to get details for.
 */
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${KEY}`;
//Screenshots
/**
 * This function takes a game_id as an argument and returns a URL that can be used to fetch screenshots
 * for that game.
 * @param game_id - The ID of the game you want to get the screenshots for.
 */
export const gameScreenShotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${KEY}`;

/**
 * This function takes a game name as an argument and returns a URL that can be used to search for that
 * game.
 * @param game_name - The name of the game you want to search for.
 */
export const searchGameURL = (game_name) => {
  console.log('====================================');
  console.log(game_name);
  console.log('====================================');
  return `${base_url}games?search=${game_name}&page_size=9&key=${KEY}`;
};
