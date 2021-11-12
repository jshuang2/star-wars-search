import {useState, useEffect} from 'react'
import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'
import './style.css'

function People() {

  // Setting state that will hold names of characters from fetchJson and store them in an array
  const [people, setPeople] = useState<PersonType[]>([])

  const pageURLs = [
    "https://swapi.dev/api/people/?page=1", 
    "https://swapi.dev/api/people/?page=2", 
    "https://swapi.dev/api/people/?page=3", 
    "https://swapi.dev/api/people/?page=4", 
    "https://swapi.dev/api/people/?page=5", 
    "https://swapi.dev/api/people/?page=6", 
    "https://swapi.dev/api/people/?page=7", 
    "https://swapi.dev/api/people/?page=8", 
    "https://swapi.dev/api/people/?page=9"
  ]
  // Calling useEffect as soon as the component mounts and calling fetchJson to fetch the names of the first page of characters.
  useEffect(() => {
    fetchJson(pageURLs)
      .then(peopleResponse => {
        setPeople(peopleResponse)
      })
  }, )


  // Mapping through the array of stored character names in state and rendering them to the page.
  return (
    <div>
      <h4 className="listHeader">Characters</h4>
      <div className="peopleContainer">{people.map(person => <Person key={person.name} person={person} />)}</div>
    </div>
  )
}

export default People

