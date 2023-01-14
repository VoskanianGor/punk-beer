import Image from 'next/image'
import Input from '~components/search/input'
import IBeer from '~interfaces/i-beer'
import useSWR from 'swr'
import BeerCard from '~components/beer-card'
import getBeers from '~api/get-beers'
import s from './index.module.scss'

export default async function Home() {
	const beers = await getBeers()

	return (
		<main>
			<div className={s.cards}>
				{beers.map(beer => (
					<BeerCard beer={beer} />
				))}
			</div>
		</main>
	)
}
