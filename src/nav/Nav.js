import React from 'react';
import './Nav.css'
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import { Link } from "react-router-dom"
import { Store }  from '../context/Store';
import { SET_SEARCH_QUERY } from '../context/Actions'
import _ from 'lodash';
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Nav = ({ sticky }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, dispatch } = React.useContext(Store);

  const setSearch = (e) => {    
    if (e.target.value && !location.pathname.includes('search')) {
      navigate('/search')
    }

    if (state.searchQuery && !e.target.value) {
      navigate('/')
    }

    dispatch({
      type: SET_SEARCH_QUERY,
      payload: {
        searchQuery: e.target.value
      }
    })
  }

  const setSearchDebounced = React.useMemo(() => _.throttle(setSearch, 1000), [setSearch]);

  return (
		<nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? 
      <Link to="">
      <LocalMoviesOutlinedIcon fontSize='large'/> 
      </Link>
      : null}
      
    </div>
    <ul className="navbar--link">
      <form>
      <input value={state.searchQuery} onChange={setSearchDebounced} className='input' type='text' placeholder='search movies' aria-label="search  "/>
      </form>
    </ul>
  </nav>
	)
};

export default Nav;
