import React from 'react';
import './Similar.css'
import { Link } from "react-router-dom";

const Similar = ({similar}) => {

  const results = similar.results

  return results !== undefined ? (
    <div className="movieDetails__similar">
      <h2 className="movieDetails__similar__title">More Like This</h2>
      <div className="movieDetails__similar__profile">
        {results &&
          results.slice(0, 5).map((movie) => {
            return (
              <div key={movie.id} className="movieDetails__similar__card">
                <Link to={`/details/${movie.id}`}>
                  <img
                    onClick={window.scrollTo(0, 0)}
                    className="movieDetails__similar__images"
                    src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  ) : (
    <React.Fragment></React.Fragment>
  );
}

export default Similar;
