export const mapper = films => {
  return films.map(({ backdrop_path: img, id, title }) => ({
    img,
    id,
    title,
    watched: false,
  }));
};
