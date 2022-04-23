import propTypes from 'prop-types';
import { FilmListItem } from 'components/FilmListItem/FilmListItem';

export const FilmList = ({ films, onDeleteFilm, onWatchedFilm }) => {
  return (
    <ul>
      {films.map(({ id, img, title, watched }) => (
        <li key={id}>
          <FilmListItem
            id={id}
            img={img}
            title={title}
            onDeleteFilm={onDeleteFilm}
            watched={watched}
            onWatchedFilm={onWatchedFilm}
          />
        </li>
      ))}
    </ul>
  );
};

FilmListItem.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  watched: propTypes.bool.isRequired,
  onDeleteFilm: propTypes.func.isRequired,
  // onWatchedFilm: propTypes.func.isRequired,
}