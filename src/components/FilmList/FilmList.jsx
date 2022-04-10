// import propTypes from 'prop-types';
import { FilmListItem } from 'components/FilmListItem/FilmListItem';
export const FilmList = ({ films, onDeleteFilm, watched }) => {
  return (
    <ul>
      {' '}
      {films.map(({ id, img, title }) => (
        <li key={id}>
          <FilmListItem
            img={img}
            title={title}
            id={id}
            onDeleteFilm={onDeleteFilm}
            watched={watched}
          />
        </li>
      ))}
    </ul>
  );
};
