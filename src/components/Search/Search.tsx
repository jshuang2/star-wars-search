import {useState, useEffect} from 'react'
import { fetchCharacter, fetchFilms, fetchSpecies } from '../../api'
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

    const [species, setSpecies] = useState<string[]>([])

    useEffect(() => {
        fetchFilms(searchResult.movies).then(response => {
            setMovieTitles(response)
        })
    }, [searchResult.movies])

    useEffect(() => {
        fetchSpecies(searchResult.species).then(response => setSpecies(response))
    }, [searchResult.species])


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
                    species = {species} 
                /> 
                : <div></div>}
        </div>
    )
}

export default Search
