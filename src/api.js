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

// Popular games
const popular_games = `games?key=${KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_sizing=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
