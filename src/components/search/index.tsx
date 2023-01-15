'use client'

import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons'
import s from './index.module.scss'
import useDebounce from '~hooks/use-debounce'
import { useRouter, useSearchParams } from 'next/navigation'

const Input = () => {
	const beerName = useSearchParams().toString().split('=')[1]
	const [search, setSearch] = useState(beerName || '')
	const debouncedSearch = useDebounce(search, 900)
	const router = useRouter()

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	const handleClear = () => {
		setSearch('')
		router.push('/')
	}

	useEffect(() => {
		const params = new URLSearchParams()
		params.set('beer_name', debouncedSearch)

		if (debouncedSearch) {
			router.push(`/?${params.toString()}`)
		} else {
			router.push('/')
		}

		console.log('search', debouncedSearch)
	}, [debouncedSearch, router])

	return (
		<div className={s.inputWrapper}>
			<input
				className={s.input}
				type="text"
				value={search}
				onChange={handleChange}
				placeholder="Start typing to search..."
			/>
			{search ? (
				<button className={s.clearButton} onClick={handleClear}>
					<Cross2Icon className={s.icon} />
				</button>
			) : (
				<MagnifyingGlassIcon className={s.icon} />
			)}
		</div>
	)
}

export default Input
