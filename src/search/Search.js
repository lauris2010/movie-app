import React from 'react'
import { Store }  from '../context/Store';
import { useNavigate } from "react-router-dom";
import '../movies/Movies.css'
import './Search.css'

import useModules from '../modules';

const Search = () => {
  const { state, dispatch } = React.useContext(Store);
  const [movies, setMovies] = React.useState([]);
  const { getSearch } = useModules();

  const searchMovies = async () => {
    const searchResult = await getSearch(state.searchQuery);
    if (searchResult && searchResult.results) {
      setMovies(searchResult.results);
    }
  }


  React.useEffect(() => {
    if (!state.searchQuery) {
      setMovies([]);
      return;
    }
    searchMovies();
  }, [state.searchQuery])

  let navigate = useNavigate()

  return (
      <div className='Container'>
        <h1 className='title'>Movie List</h1>
        <div className='row__posters'>
          {
            movies.slice(0, 15).map((movie, index) => {
              return (
                <>
                  <div className="row__movie">
                        <img 
                          onClick={() => {navigate(`/details/${movie?.id}`)}}
                          key={index}
                          src={`${process.env.REACT_APP_IMAGE_URL}${movie?.poster_path}`} 
                          alt={movie.title} 
                          className="row__poster"
                        />
                  </div>
                </>
              )
            })
          }
        </div>
      <div/>
    </div>
  )
}

export default Search