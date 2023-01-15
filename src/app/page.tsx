import Image from 'next/image'
import Input from '~components/search'
import { getBeers } from '~api/get-beers'
import s from './index.module.scss'
import BeerList from '~components/beer-list'
import { IPage } from '~interfaces/i-page'
import PreLoad from './preload'

const Home: IPage = async ({ searchParams }) => {
	const search = searchParams?.['beer_name'] ?? ''
	console.log('🚀 ~ file: page.tsx:11 ~ constHome:IPage= ~ search', search)
	const beers = await getBeers(search ? `beer_name=${search}` : '')

	return (
		<main className={s.main}>
			<Input />
			<BeerList beers={beers} />
		</main>
	)
}

export default Home
