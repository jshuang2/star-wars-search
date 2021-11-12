//API GET call that returns data on all characters from each page of characters. In order to access the next pages of characters, we needed to access the "next" property. I brute forced a solution and manually created an array with 9 pages because I know that there are only 9 pages of characters.

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

export async function fetchJson(url: string, init?: RequestInit) {

  const pages = await Promise.all(pageURLs.map(async person => {
    const response = await fetch(`${person}`, {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })

  const res = await response.json()

  return res.results;
  }))

  let characters = []

  // Because the data is an array of pages with each page holding an array of characters, I looped through each page and pushed each character's data into a new array. This new array is what I eventually return and manipulate to render a character's name onto the page.
  
  for(let page of pages) {
    for(let character of page) {
      characters.push(character)
    }
  }

  return characters
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


  const filmReponses = await Promise.all(films.map(async film => {
    const response = await fetch(`${film}`, {
          ...init ?? {},
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        })

    const res = await response.json()

    return res.title
    
  }))

  return filmReponses;

  // const filmtitlesArray: string[] = []

  // for (let film of films) {
  //   await fetch(`${film}`, {
  //     ...init ?? {},
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }
  //   }).then(response => {
  //       return response.json()
  //   })
  //     .then(data => {
  //       filmtitlesArray.push(data.title)
  //   })
  // }

  // return filmtitlesArray

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