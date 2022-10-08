import React from 'react';
import { useEffect, useState } from 'react';
import { requests } from '../../Path';

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movie);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(requests.popular);
      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className=''>
    <section className=' h-55px'>
    
        <img className=''
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt=''
          />
          <div className=' absolute top-3/4 left-10'>
           
            <h1 className='  py-2 text-white font-serif text-2xl'>{movie?.title}</h1>
            <div className=' py-2 flex items-center gap-2'>
                <button className=' hover:opacity-40 hover:bg-gray rounded-sm px-2 bg-white text-black border-black border-1'>Play</button>
                <button className=' hover:opacity-40 hover:bg-gray  rounded-sm px-2 bg-black text-white border-black border-1'>Watch Later</button>
            </div>
            <span className='text-white py-2'>Release Date : {movie?.release_date}</span>
            <p className='text-white py-2'>{movie?.overview}</p>
        </div>
        {/* })} */}
    </section>
    </div>
  )
}

export default Hero