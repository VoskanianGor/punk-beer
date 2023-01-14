import { Inter } from '@next/font/google'
import styles from './styles.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className={inter.className}>
			<h1 className={styles.test}>TEST</h1>
		</main>
	)
}
