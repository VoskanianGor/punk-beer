import { cookies } from 'next/headers'
import { Inter } from '@next/font/google'
import clsx from 'clsx'
import Header from '~components/header'
import '~styles/colors.css'
import '~styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const theme = cookies().get('theme')?.value

	return (
		<html
			lang="en"
			className={clsx(inter.className, {
				'dark-theme': theme === 'dark',
			})}
		>
			<head />
			<body className="container">
				<Header />
				{children}
			</body>
		</html>
	)
}
