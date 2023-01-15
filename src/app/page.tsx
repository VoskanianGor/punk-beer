import Image from 'next/image'
import Input from '~components/search'
import getBeers from '~api/get-beers'
import s from './index.module.scss'
import BeerList from '~components/beer-list'
import { IPage } from '~interfaces/i-page'

const Home: IPage = async ({ searchParams }) => {
	const beers = await getBeers()

	console.log(searchParams)

	return (
		<main>
			<Input />
			<BeerList beers={beers} /* searchParams={searchParams} */ />
		</main>
	)
}

export default Home
