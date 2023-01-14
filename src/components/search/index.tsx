'use client'

import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons'
import s from './index.module.scss'

const Input = () => {
	const [search, setSearch] = useState('')

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	return (
		<div className={s.inputWrapper}>
			<input
				className={s.input}
				type="text"
				value={search}
				onChange={handleChange}
			/>
			{search ? (
				<button className={s.clearButton} onClick={() => setSearch('')}>
					<Cross2Icon className={s.icon} />
				</button>
			) : (
				<MagnifyingGlassIcon className={s.icon} />
			)}
		</div>
	)
}

export default Input
