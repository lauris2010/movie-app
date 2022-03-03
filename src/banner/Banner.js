import React, { useEffect } from 'react';
import './Banner.css'
import useModules from '../modules';
import { Link } from "react-router-dom"

const Banner = () => {
  const modules = useModules()
  const [movie, setMovie] = React.useState([])

  useEffect(() => {
    const getUpcoming = async () => {
      const upcomingMoviesData = await modules.getUpcoming()
      
      if(upcomingMoviesData?.results) {
        setMovie(upcomingMoviesData?.results[Math.floor(Math.random() * upcomingMoviesData?.results.length)])
      }
    }

    getUpcoming()
  }, [])
  
  return (
    <React.Fragment>
      {movie?.backdrop_path ? (
        <header className='banner'
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 4%, rgba(20,20,20,0.45807072829131656) 100%)
              , url(${process.env.REACT_APP_BACKDROP_URL}${movie?.backdrop_path})`,
        }}>
        <div className='banner-contents'>
          <h1 className='banner-title'>{movie?.original_title}</h1>
            <Link to={`details/${movie?.id}`}>
            <button className='banner-button'>Details</button>
            </Link>
          <h1 className='banner__overview'>
          {movie.overview}
          </h1>
        </div>
        <div className='banner_fadeBottom'/>
      </header>
      ) : ( 
        <div style={{ maxWidth: "100%", height: "80vh" }}>
          <h1
            style={{
                height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent:'center',
            }}
          >
            Loading...
          </h1>
        </div> 
    )} 
  </React.Fragment>
  )
};

export default Banner;
