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





export async function fetchCharacter(url: string){

  const response = await 
  fetch(`https://swapi.dev/api/people/?search=${url}`)
  .then (response => {
    return response.json();
  })
  .then (async data => { 
    return data
  })

  return response.results[0]

}




export async function fetchFilms(films: string[]) {

  const filmtitlesArray: string[] = []

  for (let film of films) {
    await fetch(`${film}`).then(response => {
      return response.json()
    })
    .then(data => {
      filmtitlesArray.push(data.title)
    })
  }

  return filmtitlesArray

}




export async function fetchSpecies(speciesArray: string[]) {

  const speciesResult: string[] = []

  for (let specie of speciesArray) {
    await fetch(`${specie}`).then(response => {
      return response.json();
    })
    .then(data => {
      speciesResult.push(data.name)
    })
  }

  return speciesResult
}