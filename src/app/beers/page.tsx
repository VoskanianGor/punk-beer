import Image from 'next/image'
import Input from '~components/search'
import { getBeers } from '~api/get-beers'
import s from './index.module.scss'
import BeerList from '~components/beer-list'
import { IPage } from '~interfaces/i-page'

interface SearchParams {
	beer_name?: string
	page?: string | number
	per_page?: string | number
}

const BeersPage: IPage = async ({ searchParams: SSRSearchParams }) => {
	const searchParams = new URLSearchParams(SSRSearchParams)
	const beers = await getBeers(searchParams.toString())

	return (
		<main className={s.main}>
			<Input />
			<BeerList beers={beers} />
		</main>
	)
}

export default BeersPage
