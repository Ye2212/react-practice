// import propTypes from 'prop-types';
export const FilmListItem = ({
  img,
  title,
  id,
  onDeleteFilm,
  watched,
  onWatchedFilm,
}) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${img}`} alt="film" />
      <h2>{title}</h2>
      <button type="button" onClick={() => onDeleteFilm(id)}>
        Delete
      </button>
      <span onClick={() => onWatchedFilm(id)}>watched: {watched + ''}</span>
    </>
  );
};
