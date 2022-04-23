// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { mapper } from 'utils/mapper';
import { FilmList } from './FilmList/FilmList';
import { fetchFilms } from '../services/api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchFilms(page).then((films) => {
      const mapperFilms = mapper(films.data.results);
      setFilms((prevFilms) => [...prevFilms, ...mapperFilms])
    }).catch((error) => console.log(error))
      .finally(setIsLoading(false))
  }
    , [page])

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1)
  };
  const toggleWatchedFilm = id => {
    setFilms((prevFilms) =>
      prevFilms.map((film) => {
        if (film.id === id) {
          return {
            ...film,
            watched: !film.watched,
          }
        }; return film;
      })
    )
  }
  const openModal = (image) => {
    setImage(image);
  }
  const closeModal = () => {
    setImage('');
  }

  return (
    <>
      {isLoading && < h1 >Loading...Filmoteka</h1>}

      <FilmList
        films={films}
        openModal={openModal}
        onWatchedFilm={toggleWatchedFilm}
      />{films && < Button onClick={loadMore} />}
      {image && < Modal image={image} closeModal={closeModal} />}
    </>
  )
}


// class App extends Component {
//   state = {
//     films: [],
//     isLoading: false,
//     page: 1,
//   };

//   getFetchFilms = page => {
//     this.setState({ isLoading: true });
//     fetchFilms(page).then(({ data }) => this.setState(prevState => ({
//       films: [...prevState.films, ...mapper(data.results)],
//     }))
//     )
//       .catch(error => console.log(error))
//       .finally(this.setState({ isLoading: false }))
//   }

//   loadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }))
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.page !== this.state.page) {
//       console.log(this.state.page)

//       this.getFetchFilms(this.state.page);
//     }
//   }

//   componentDidMount() {
//     this.getFetchFilms(this.state.page);
//   }

//   toggleWatchedFilm = currentId => {
//     this.setState(prevState => ({
//       films: prevState.films.map(film => {
//         if (currentId === film.id) {
//           return { ...film, watched: !film.watched };
//         }
//         return film;
//       }),
//     }));
//   };

//   render() {
//     const { films } = this.state;
//     return (
//       <>
//         <h1>Filmoteka</h1>

//         <FilmList
//           films={films}
//           onWatchedFilm={this.toggleWatchedFilm}
//         />{this.state.films && < Button onClick={this.loadMore} />}
//       </>
//     );
//   }
// }

export default App;
