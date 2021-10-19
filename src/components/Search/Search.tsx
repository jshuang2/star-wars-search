import {useState, useEffect} from 'react'

const Search = () => {

    const [text, setText] = useState("")

    const onSubmit = (event: any) => {
        event.preventDefault()
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
        </div>
    )
}

export default Search
