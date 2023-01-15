'use client'

import { FC, use, useEffect, useState } from 'react'
import useSWR from 'swr'
import s from './index.module.scss'
import BeerCard from '~components/beer-card'
import { useSearchParams } from 'next/navigation'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import IBeer from '~interfaces/i-beer'
import clsx from 'clsx'

interface IBeerList {
	beers: IBeer[]
	searchParams?: Record<string, string>
}

const fetcher = (url: string) =>
	fetch(process.env.API_URL + url).then(res => res.json())

const BeerList: FC<IBeerList> = ({ beers }) => {
	const [parent] = useAutoAnimate<HTMLDivElement>()
	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams)
	const url = searchParams ? `/beers?${params.toString()}` : null

	const { data: res, isLoading } = useSWR<IBeer[]>(url, fetcher, {
		revalidateOnFocus: false,
		keepPreviousData: true,
	})

	const beersData = res ?? beers

	return (
		<div
			className={clsx(s.cards, {
				[s.loading]: isLoading,
			})}
			ref={parent}
		>
			{beersData.map(beer => (
				<BeerCard key={beer.id} beer={beer} />
			))}
		</div>
	)
}

export default BeerList
