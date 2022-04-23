import propTypes from 'prop-types';
import styles from '../FilmList/FilmList.module.css'
import { FilmListItem } from 'components/FilmListItem/FilmListItem';


export const FilmList = ({ films, openModal, onWatchedFilm }) => {
  return (
    <ul className={styles.wrapper}>
      {
        films.map(({ id, image, title, watched }) => (
          <li key={id}>
            <FilmListItem
              id={id}
              openModal={openModal}
              image={image}
              title={title}
              watched={watched}
              onWatchedFilm={onWatchedFilm}
            />
          </li>
        ))
      }
    </ul >
  );
};

FilmListItem.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  watched: propTypes.bool.isRequired,
  onWatchedFilm: propTypes.func.isRequired,
}