import getBeers from '~api/get-beers'
import { IPage } from '~interfaces/i-page'

const BeerPage: IPage = async ({ params: { beerId } }) => {
	const [beerData] = await getBeers(beerId)

	return (
		<>
			<h1>Beer Page {beerId}</h1>
			<p>{beerData?.name}</p>
			<h2>{beerData?.description}</h2>
		</>
	)
}

export default BeerPage
