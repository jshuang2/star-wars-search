import './style.css'

const SearchResult = ({searchResult}: any) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{searchResult.name}</h3>
                    <p className="card-text">Height: {searchResult.height} centimeters</p>
                    <p className="card-text">Birth Year: {searchResult.birthYear}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
