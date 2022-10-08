import React from 'react';
import { useEffect, useState } from 'react';
import Rows from './rows';

const Movie = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data)
    };

    fetchMovies();
  }, [url]);

  return (
    <div className='flex-row px-4 w-full  h-screan bg-black' >
    <h1 className=' text-white py-2'>Populer</h1>
    <div className=" gap-4 flex justify-center justify-self-center overflow-x-scroll scrollbar-hide scroll-smooth" id={`slider${title}`}>
        {movies.map((movie) => {
          return <Rows key={movie.id} {...movie} />;
        })}
      </div>
</div>
  )
}

export default Movie