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

  const filmtitlesArray: any = []

  for (let film of films) {
    await fetch(`${film}`).then(response => {
      const res = response.json()
      return res
    })
    .then(data => {
      console.log(data, "data")
      filmtitlesArray.push(data.title)
    })
  }

  console.log(filmtitlesArray, "myArray")

  return filmtitlesArray

}