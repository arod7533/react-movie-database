import {useState, useEffect} from 'react';
import API from '../API'

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMore, setIsLoadingMore] = useState(false); 

    console.log(searchTerm)

    const fetchMovies = async (searchTerm, page = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await  API.fetchMovies(searchTerm, page) 
            
            setState(prev => ({
                 ...movies, 
                 results: 
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        }
        catch(err){
            setError(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        setState(initialState);
        fetchMovies(searchTerm, 1);
    }, [searchTerm]);

    useEffect(() => {
        if(!isLoadingMore) return;
        fetchMovies(searchTerm, state.page + 1);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page])

    return {
        state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore
    }
}