export const mapper = data => {
  console.log(data);
  return data.map(({ backdrop_path, id, title }) => ({
    image: backdrop_path,
    id,
    title,
    watched: false,
  }));
};
