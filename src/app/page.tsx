import Image from 'next/image'
import Input from '~components/search'
import IBeer from '~interfaces/i-beer'
import useSWR from 'swr'
import BeerCard from '~components/beer-card'
import getBeers from '~api/get-beers'
import s from './index.module.scss'

export default async function Home() {
	const beers = await getBeers()

	return (
		<main>
			<Input />
			<div className={s.cards}>
				{beers.map(beer => (
					<BeerCard key={beer.id} beer={beer} />
				))}
			</div>
		</main>
	)
}
