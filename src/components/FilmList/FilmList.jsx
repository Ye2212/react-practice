// import propTypes from 'prop-types';
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
