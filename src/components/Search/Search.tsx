import {useState, useEffect} from 'react'
import { fetchCharacter, fetchFilms } from '../../api'
import SearchResult from '../SearchResult'
import './style.css'

const Search = () => {

    const [text, setText] = useState("")
    const [searchResult, setSearchResult] = useState<any>(
        {
            name: "",
            height: "",
            birthYear: "",
            movies: [],
            species: []
        }
    )
    const [movieTitles, setMovieTitles] = useState<string[]>([])

    useEffect(() => {
        fetchFilms(searchResult.movies).then(response => {
            setMovieTitles(response)
        })
    }, [searchResult.movies])


    const onSubmit = (event: any) => {
        event.preventDefault()

        fetchCharacter(text)
        .then(response => {

            if (!response) {
                alert("Please pick a valid character")
                return
            }

        setSearchResult(
            {
                name: response.name,
                height: response.height,
                birthYear: response.birth_year,
                movies: response.films,
                species: response.species
            }
        )
        })
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>

                <div className="mb-3">
                    
                    <input 
                        type="text"
                        className="form-control" 
                        placeholder="Search for a character" 
                        value={text} 
                        onChange={(event) => setText(event.target.value)}/>
                </div>

                <div className="submit">
                    <button type="submit" className="btn btn-dark">Search</button>
                </div>

            </form>

            {searchResult.name ? 
                <SearchResult 
                    searchResult = {searchResult}
                    movieTitles = {movieTitles} 
                /> 
                : <div></div>}
        </div>
    )
}

export default Search
