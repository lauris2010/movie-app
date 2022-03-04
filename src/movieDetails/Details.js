import React from 'react';
import useModules from '../modules';
import withRouter from '../withRouter';
import './Details.css'
import Similar from './Similar';

const Details = ({ params:  {id}  }) => {
  const [movie, setMovie] = React.useState({})
  const [similar, setSimilar] = React.useState({})
  const modules = useModules()

  const genres = movie.genres

  let time= movie.runtime
  const hours = Math.floor(time /60)
  const minutes = time % 60
  
  React.useEffect(() => {
    const getMovieDetails = async () => {
      const movieByIDData = await modules.getMoviesByID(id)
      
      if (movieByIDData) {
        setMovie(movieByIDData)
      }
    }
    const getSimilarMovies = async () => {
      const similarMovies = await modules.getSimilarMovies(id)
      if (similarMovies) {
        setSimilar(similarMovies)
      }
    }
    getSimilarMovies()
    getMovieDetails()
  }, [id])
  return (
    <div className='movieDetails'>
      {
          Object.keys(movie).length ? (
          <div
            className="movieDetails__backdrop"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              backgroundSize: "cover",
              objectFit: "contain",
              backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0.8071603641456583) 100%), url(${process.env.REACT_APP_BACKDROP_URL}${movie?.backdrop_path})`
            }}
          >
            <div className="movieDetails__main">
              <div className='movieDetails__info'>
                <div>
                  <img className='movieDetails__mainPoster' alt={movie.title} src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}` }/>
                </div>
                <div className='movieDetails__mainInfo'>
                    <h1 className='movieDetails__title'>{movie.original_title}
                      <span>({movie.release_date.slice(0, -6)})</span>
                      <p className='movieDetails__runtime'>{hours}h {minutes}min</p>
                      <p className='movieDetails__imdb'>IMDB: {movie.vote_average}</p>
                    </h1>
                    <div className='movieDetails__genres'>
                        {
                          genres.slice(0,3).map((genre, index) => {
                            return (
                              <p key={index} className="movieDetails__genre">{genre.name}</p>
                              )
                              
                          }
                            )
                        }
                    </div>
                      <div className="movieDetails__buttonDiv">
                        <button className="trailer__button movieDetails__button">Play Trailer</button>
                      </div>
                      <div>
                        <p className='movieDetails__overview'>{movie.overview}</p>
                      </div>
                </div>
              </div>
            </div>
          </div>
        ) : undefined
      }
      <div className="movieDetails__similar">
        <Similar similar={similar}/>
      </div>
    </div>
  )
};

export default withRouter(Details);