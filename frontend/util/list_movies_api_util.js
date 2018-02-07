export const createListMovie = (listMovieData) => {
  return $.ajax({
    url: '/api/list_movies',
    method: 'POST',
    data: listMovieData
  });
};

export const fetchListMovie = id => {
  return $.ajax({
    url: `/api/list_movies/${id}`
  });
};

export const deleteListMovie = id => {
  return $.ajax({
    url: `/api/list_movies/${id}`,
    method: 'DELETE'
  });
};
