/**
 * It takes an image path and a size, and returns a new image path with the size inserted into the
 * path.
 * @param imagePath - https://media.rawg.io/media/screenshots/c4d/c4d9f9a8b9b8c9f9b8d9f9a8b9b8c9f9.jpg
 * @param size - The size of the image you want to return.
 */
export const smallImage = (imagePath, size) => {
  console.log('====================================');
  console.log(imagePath);
  console.log('====================================');
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        'media/screenshots',
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace('/media/games', `/media/resize/${size}/-/games`);
  return image;
};
