import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { movieActions } from "../redux/actions";

import { imageExists } from '../utils/index';

function HomePage() {
  const { movies } = useSelector((s) => s.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getAll());
  }, [dispatch]);

  return (
    <div>
      <h1>IMDB Home Page!</h1>
      {movies?.map((m,idx) => {
        if(idx === 0) {
          console.log({ m, hmmm: m.belongs_to_collection });
        }
        let imageUrl = 'https://images-na.ssl-images-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg'
        if (imageExists("https://image.tmdb.org/t/p/w500" + m.poster_path)) {
          imageUrl = "https://image.tmdb.org/t/p/w500" + m.poster_path
        }
          return (
            <div>
              <h1>{m.title}</h1>
              <h3>{m.release_date}</h3>
              <h3>{m.overview}</h3>
              <h3>{m.tagline}</h3>
              <img src={imageUrl} height={100} width={100} />
            </div>
          );
      })}
    </div>
  );
}

export { HomePage };
