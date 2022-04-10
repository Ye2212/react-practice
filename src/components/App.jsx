import data from 'data.json';
import { Component } from 'react';
import { mapper } from 'utils/mapper';
import { FilmList } from './FilmList/FilmList';
import { Button } from './Button/Button';
console.log(data);

class App extends Component {
  state = {
    films: mapper(data),
    isVisible: false,
  };

  toggleWatchedFilm = currentId => {
    this.setState(prevState => ({
      films: prevState.films.map(film => {
        if (currentId === film.id) {
          return { ...film, watched: !film.watched };
        }
        return film;
      }),
    }));
  };

  toggleVisibility = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };
  deleteFilm = delId => {
    this.setState(prevState => ({
      films: prevState.films.filter(({ id }) => id !== delId),
    }));
  };

  render() {
    const { isVisible, films } = this.state;
    return (
      <>
        <h1>Filmoteka</h1>
        <Button
          toggleVisibility={this.toggleVisibility}
          isVisible={isVisible}
        />
        {isVisible && (
          <FilmList
            films={films}
            onDeleteFilm={this.deleteFilm}
            onWatchedFilm={this.toggleWatchedFilm}
          />
        )}
      </>
    );
  }
}

export default App;
