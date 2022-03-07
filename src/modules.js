import React from 'react';
import axios from 'axios'
import { Store } from './context/Store'


const useModules = () => { 
    const { state } = React.useContext(Store);

    const api = axios.create({
        baseURL : `https://api.themoviedb.org/3`
    })

    const genres = {
        Action: 28,
        Adventure: 12,
        Animation: 16,
        Comedy: "35",
        Crime: 80,
        Documentary: 99,
        Drama: 18,
        Family: 10751,
        Fantasy: 14,
        History: 36,
        Horror: 27,
        Music: 10402,
        Mystery: 9648,
        Romance: 10749,
        "Science Fiction": 878,
        "TV Movie": 10770,
        Thriller: 53,
        War: 10752,
        Western: 37,
    }

    const getTrending = async () => {
        const trending = await api.get(`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)
        
        return trending?.data
    }

    const getPopular = async () => {
        const popular = await api.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        return popular?.data
    }

    const getTopRated = async () => {
        const topRated = await api.get(`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
        return topRated?.data
    }

    const getComedyList = async () => {
        const comedyList = await api.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genres.Comedy}`)
        return comedyList?.data
    }

    const getHorror = async () => {
        const horror = await api.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genres.Horror}`)
        return horror?.data
    
    }
    const getDocumentaries = async () => {
        const documentary = await api.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genres.Documentary}`)
        return documentary?.data
    }

    const getUpcoming = async () => {
        const upcoming = await api.get(`/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)
        return upcoming?.data
    }

    const getMoviesByID = async (id) => {
        const moviesByID = await api.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        return moviesByID?.data
    }
    
    const getSimilarMovies = async (id) => {
        const similarMovies = await api.get(`/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`)
        return similarMovies?.data 
    }

    const getSearch = async () => {
        const search = await api.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${state.searchQuery}`)
        return search?.data
    }

    const getTrailer = async (id) => {
        const trailer = await api.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-U`)
        return trailer?.data

    }

    const modules = {
        getTrending,
        getPopular,
        getTopRated,
        getComedyList,
        getHorror,
        getDocumentaries,
        getUpcoming,
        getMoviesByID,
        getSimilarMovies,
        getSearch,
        getTrailer,
    }

    return modules
}

export default useModules