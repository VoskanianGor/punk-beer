'use client'

import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons'
import useSearchWithRoute from '~hooks/use-search-with-route'
import s from './index.module.scss'

const Search = () => {
	const { search, handleChange, handleClear } = useSearchWithRoute()

	return (
		<div className={s.inputWrapper}>
			<input
				className={s.input}
				type="text"
				value={search}
				onChange={handleChange}
				placeholder="for example Alpha..."
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

export default Search
