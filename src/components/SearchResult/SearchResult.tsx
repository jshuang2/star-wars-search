import './style.css'

// Takes in props from Search and renders the data in a smaller component here.
const SearchResult = ({searchResult, movieTitles, species}: any) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{searchResult.name}</h3>
                    <p className="card-text">Height: {searchResult.height} centimeters</p>
                    <p className="card-text">Birth Year: {searchResult.birthYear}</p>
                    <p>Movies: {movieTitles.join(", ")}</p>
                    {species.length > 0 ? <p>Species: {species.join(",")}</p> : <p>Species: N/A</p>}
                </div>
            </div>
        </div>
    )
}

export default SearchResult
