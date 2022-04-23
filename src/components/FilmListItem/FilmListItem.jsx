import propTypes from 'prop-types';
import styles from '../FilmList/FilmList.module.css';
export const FilmListItem = ({
  image,
  title,
  id,
  openModal,
  watched,
  onWatchedFilm,
}) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${image}`}
        alt="film"
        className={styles.image}

        onClick={() => { openModal(image); }} />
      <h2>{title}</h2>
      <span onClick={() => onWatchedFilm(id)}>watched: {watched + ''}</span>
    </>
  );
};

FilmListItem.propTypes = {
  films: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string,
      image: propTypes.string.isRequired,
      watched: propTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onWatchedFilm: propTypes.func.isRequired,
}
