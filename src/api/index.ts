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


export async function fetchCharacter<Response = any>(url: string): Promise<Response> {

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
