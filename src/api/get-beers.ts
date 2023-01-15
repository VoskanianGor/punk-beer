import IBeer from "~interfaces/i-beer"

const getBeers = async (id?: string) => {
  const response = await fetch(`${process.env.API_URL}/beers/${id || ''}`)
  return (await response.json()) as IBeer[]
}

export default getBeers