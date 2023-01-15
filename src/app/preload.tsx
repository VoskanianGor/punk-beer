'use client'

import useSWR, { SWRConfig } from 'swr'

const PreLoad = ({ children, fallback }) => {
	return (
		<SWRConfig
			value={{
				// fetcher: (url) => fetch(url).then((res) => res.json()),
				// revalidateOnFocus: false,
				// revalidateOnMount: true,
				// keepPreviousData: true,
				fallback,
			}}
		>
			{children}
		</SWRConfig>
	)
}

export default PreLoad
