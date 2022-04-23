// import { Component } from 'react';
import { useState } from 'react';
import data from 'data.json';
import { mapper } from 'utils/mapper';
import { FilmList } from './FilmList/FilmList';
import { Button } from './Button/Button';
// console.log(data);

const App = () => {
  const [films, setFilms] = useState(mapper(data));
  const [isVisible, setIsVisible] = useState(false);
  // const [watched, setWatched] = useState(false);

  // state = {
  //   films: mapper(data),
  //   isVisible: false,
  // };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }
  // toggleVisibility = () => {
  //   this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  // };


  const deleteFilm = delId => {
    setFilms(prevFilms => {
      prevFilms.filter(({ id }) => id !== delId)
    })
  }
  // deleteFilm = delId => {
  //   this.setState(prevState => ({
  //     films: prevState.films.filter(({ id }) => id !== delId),
  //   }));
  // };


  const toggleWatchedFilm = currentId => {

  }

  // toggleWatchedFilm = currentId => {
  //   this.setState(prevState => ({
  //     films: prevState.films.map(film => {
  //       if (currentId === film.id) {
  //         return { ...film, watched: !film.watched };
  //       }
  //       return film;
  //     }),
  //   }));
  // };


  return (
    <>
      <h1>Filmoteka</h1>
      <Button
        toggleVisibility={toggleVisibility}
        isVisible={isVisible}
      />
      {isVisible && (
        <FilmList
          films={films}
          onDeleteFilm={deleteFilm}
          onWatchedFilm={toggleWatchedFilm}
        />
      )}
    </>
  )

  // render() {
  //   const { isVisible, films } = this.state;
  // return (
  //   <>
  //     <h1>Filmoteka</h1>
  //     <Button
  //       toggleVisibility={this.toggleVisibility}
  //       isVisible={isVisible}
  //     />
  //     {isVisible && (
  //       <FilmList
  //         films={films}
  //         onDeleteFilm={this.deleteFilm}
  //         onWatchedFilm={this.toggleWatchedFilm}
  //       />
  //     )}
  //   </>
  // );
  // }
}

export default App;
