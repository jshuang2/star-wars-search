import {useState, useEffect} from 'react'
import { fetchCharacter, fetchFilms, fetchSpecies } from '../../api'
import SearchResult from '../SearchResult'
import './style.css'

const Search = () => {

    // Creating initial state for inputted text in the search bar
    const [text, setText] = useState("")

    // Creating initial state for result of the search. It's empty until fetchCharacter is called.
    const [searchResult, setSearchResult] = useState<any>(
        {
            name: "",
            height: "",
            birthYear: "",
            movies: [],
            species: []
        }
    )
    
    // Creating initial state for the return of fetchFilms. Storing the movie titles as an array.
    const [movieTitles, setMovieTitles] = useState<string[]>([])

    // Creating initial state for the return of fetchSpecies. Storing the movie titles as an array.
    const [species, setSpecies] = useState<string[]>([])


    // Calling fetchFilms whenever searchResult state gets populated with movie endpoints.
    useEffect(() => {
        fetchFilms(searchResult.movies).then(response => {
            setMovieTitles(response)
        })
    }, [searchResult.movies])

    // Calling fetchSpecies whenever searchResult state gets populated with species endpoints.
    useEffect(() => {
        fetchSpecies(searchResult.species).then(response => setSpecies(response))
    }, [searchResult.species])



    // Calling onSubmit when the user clicks on the submit button for a search.
    const onSubmit = (event: any) => {
        event.preventDefault()

        // If there currently is a searchResult, then reset the state.
        if (searchResult.name) {
            setSearchResult(
                {
                    name: "",
                    height: "",
                    birthYear: "",
                    movies: [],
                    species: []
                }
            )
        }
        
        // Call fetchCharacter with the user's typed search as the input.
        fetchCharacter(text)
        .then(response => {

            if (!response) {
                alert("Please pick a valid character")
                return
            }
        
        // Populate the searchResult state with the return of fetchCharacter.
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

            {/* Adding a ternary that will help solve the issue of movieTitles rendering slower than other data.*/}
            {movieTitles.length > 0 ? 
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
