//API GET call that returns data on the first page of characters. In order to access the next pages of characters, we need to access the "next" property.
export async function fetchJson<Response = any>(url: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(
    `https://swapi.dev/api/${url}/`,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })


  return response.json()
}




// API GET call that takes in a character's name and returns data on that character.
export async function fetchCharacter<Response = any>(url: string, init?: RequestInit): Promise<Response>{

  const response = await 
  fetch(`https://swapi.dev/api/people/?search=${url}`, {
    ...init ?? {},
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then (response => {
    return response.json();
  })
  .then (async data => { 
    return data
  })

  return response.results[0]

}



// API GET call that takes in an array of film endpoints and returns the titles of each film in a new array.
export async function fetchFilms(films: string[], init?: RequestInit) {

  const filmtitlesArray: string[] = []

  for (let film of films) {
    await fetch(`${film}`, {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => {
        return response.json()
    })
      .then(data => {
        filmtitlesArray.push(data.title)
    })
  }

  return filmtitlesArray

}



// API GET call that takes in an array of species endpoints and returns the name of each species in a new array.
export async function fetchSpecies(speciesArray: string[], init?: RequestInit) {

  const speciesResult: string[] = []

  for (let specie of speciesArray) {
    await fetch(`${specie}`, {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => {
        return response.json();
    })
      .then(data => {
        speciesResult.push(data.name)
    })
  }

  return speciesResult
}