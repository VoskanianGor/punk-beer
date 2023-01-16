'use client'

import type { FC } from 'react'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'
import clsx from 'clsx'
import type IBeer from '~interfaces/i-beer'
import BeerCard from '~components/beer-card'
import s from './index.module.scss'

interface IBeerList {
	beers: IBeer[]
	searchParams?: Record<string, string>
}

const fetcher = (url: string) =>
	fetch(process.env.API_URL + url).then(res => res.json())

const BeerList: FC<IBeerList> = ({ beers }) => {
	const searchParams = useSearchParams()
	const url = searchParams ? `/beers?${searchParams.toString()}` : null

	const {
		data: res,
		isLoading,
		isValidating,
	} = useSWR<IBeer[]>(url, fetcher, {
		revalidateOnFocus: false,
		revalidateOnMount: false,
		keepPreviousData: true,
	})

	const beersData = res ?? beers

	return (
		<div
			className={clsx(s.cards, {
				[s.loading]: isLoading || isValidating,
			})}
		>
			{beersData.length > 0 ? (
				beersData.map(beer => <BeerCard key={beer.id} beer={beer} />)
			) : (
				<h1>No beers found 😔</h1>
			)}
		</div>
	)
}

export default BeerList
