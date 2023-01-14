import type { FC, ChangeEvent } from 'react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import s from './index.module.scss'

interface IInput {
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = ({ value, onChange }) => {
	return (
		<div className={s.input}>
			<MagnifyingGlassIcon />
			<input type="text" value={value} onChange={onChange} />
		</div>
	)
}

export default Input
