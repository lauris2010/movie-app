import React from 'react';
import './Movies.css'
import useModules from '../modules';
import { Link } from "react-router-dom";

const Movies = () => {
  const modules = useModules()
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  const [popularMovies, setPopularMovies] = React.useState([])
  const [topRatedMovies, setTopRatedMovies] = React.useState([])
  const [comedyMovies, setComedyMovies] = React.useState([])
  const [horrorMovies, setHorrorMovies] = React.useState([])


  React.useEffect(() => {
    const getMovies = async () => {
      const trendingMoviesData = await modules.getTrending();
      
      if (trendingMoviesData?.results) {
        setTrendingMovies(trendingMoviesData?.results);
      }
      
    }

    const getPopular = async () => {
      const popularMoviesData = await modules.getPopular();

      if (popularMoviesData?.results) {
        setPopularMovies(popularMoviesData?.results);
        
      }
    }

    const getTopRated = async () => {
      const topRatedMoviesData = await modules.getTopRated();
      if (topRatedMoviesData) {
        setTopRatedMovies(topRatedMoviesData?.results);
      }
    }

    const getComedyList = async () => {
      const comedyListData = await modules.getComedyList();
      if (comedyListData?.results) {
        setComedyMovies(comedyListData?.results);
      }
    }

    const getHorrorMovies = async () => {
      const horrorMoviesData = await modules.getHorror();
      if (horrorMoviesData) {
        setHorrorMovies(horrorMovies)
      } 
    }

    getMovies();
    getPopular();
    getTopRated();
    getComedyList();
    getHorrorMovies();

  }, []);
  
  return (
      <div className='row'>
        <h1 className='row__title'>Trending Movies</h1>
        <div className='row__posters'>
          {
            trendingMovies.slice(0, 15).map((movie, index) => {
              return (
                <>
                  <div className="row__movie">
                  <Link to={`details/${movie?.id}`}>
                        <img 
                        key={index}
                          src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} 
                          alt={movie.title} 
                          className="row__poster"
                        />
                      </Link>
                  </div>
                </>
              )
            })
          }
        </div>
        <h1 className='row__title'>Popular Movies</h1>
        <div className='row__posters'>
          {
            popularMovies.slice(0, 15).map((movie, index) => {
              return (
                <>
                  <div className="row__movie">
                  <Link to={`details/${movie?.id}`}>
                        <img 
                        key={index}
                          src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} 
                          alt={movie.title} 
                          className="row__poster"
                        />
                      </Link>
                  </div>
                </>
              )
            })
          }
        </div>
        <h1 className='row__title'>Top Rated Movies</h1>
        <div className='row__posters'>
          {
            topRatedMovies.slice(0, 15).map((movie, index) => {
              return (
                <>
                  <div  className="row__movie">
                  <Link to={`details/${movie?.id}`}>
                        <img 
                          key={index}
                          src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} 
                          alt={movie.title} 
                          className="row__poster"
                        />
                      </Link>
                  </div>
                </>
              )
            })
          }
        </div>
        <h1 className='row__title'>Comedy Movies</h1>
        <div className='row__posters'>
          {
            comedyMovies.slice(0, 15).map((movie, index) => {
              return (
                <>
                  <div className="row__movie">
                      <a href="#">
                        <img 
                          key={index}
                          src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} 
                          alt={movie.title} 
                          className="row__poster"
                        />
                      </a>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
  )
};

export default Movies;