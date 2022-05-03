import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//style
import styled from 'styled-components';
import { motion } from 'framer-motion';
//IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
//Star Images
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetails = ({ pathId }) => {
  const history = useHistory();

  /**
   * If the element clicked has a class name of 'shadow', then the body's overflow is set to 'auto' and the
   * history is pushed to '/'.
   * @param e - the event object
   */
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  /**
   * If the platform is PlayStation 4, return the playstation icon. If the platform is Xbox One, return
   * the xbox icon. If the platform is PC, return the steam icon. If the platform is Nintendo Switch,
   * return the nintendo icon. If the platform is iOS, return the apple icon. If the platform is
   * anything else, return the gamepad icon.
   * @param platform - The platform the game is on.
   * @returns the image of the platform.
   */
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };

  /* Destructuring the state.detail object. */
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  const getStars = (scores) => {
    const stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i < 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} alt={i} key={i} />);
      } else {
        stars.push(<img src={starEmpty} alt={i} key={i} />);
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <CardShadow onClick={exitDetailHandler} className="shadow">
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt="" />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <motion.img
                  src={screen.image}
                  alt=""
                  // layoutId={`image ${pathId}`}
                  key={screen.id}
                  style={{
                    visibility: 'visible',
                  }}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #f5f5f5;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
    visibility: visible;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetails;
