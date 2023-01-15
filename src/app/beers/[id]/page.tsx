import { getBeerById } from '~api/get-beers'
import { IPage } from '~interfaces/i-page'

export const dynamic = 'force-dynamic'
export const dynamicParams = true

const BeerPage: IPage = async ({ params: { id } }) => {
	const [beerData] = await getBeerById(id)

	return (
		<>
			<h1>Beer Page {id}</h1>
			<p>{beerData?.name}</p>
			<h2>{beerData?.description}</h2>
		</>
	)
}

export default BeerPage
