import propTypes from 'prop-types';

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

FilmListItem.propTypes = {
    films: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            title: propTypes.string.isRequired,
            img: propTypes.string.isRequired,
            watched: propTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
    onDeleteFilm: propTypes.func.isRequired,
    onWatchedFilm: propTypes.func.isRequired,
}
