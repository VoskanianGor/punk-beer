import IBeer from "~interfaces/i-beer"

const makeRequest = async <T>(url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Error fetching beers')
  }

  return (await response.json()) as T
}

export const getBeers = async (query?: string) => {
  const url = `${process.env.API_URL}/beers?${query}`

  return makeRequest<IBeer[]>(url)
}

export const getBeerById = async (id: string) => {
  const url = `${process.env.API_URL}/beers/${id}`

  return makeRequest<IBeer[]>(url)
}