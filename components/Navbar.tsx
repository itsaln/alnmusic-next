import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/components/Navbar.module.scss'
import { Text, Link } from '@nextui-org/react'

const Navbar: NextPage = () => {
	const menuItems = [
		{ text: 'Главная', href: '/' },
		{ text: 'Список треков', href: '/tracks' },
		{ text: 'Список альбомов', href: '/albums' }
	]
	const router = useRouter()

	return (
		<div className={styles.navbar}>
			<Text h3 color='#fff'>aln-music</Text>
			<ul className={styles.menuList}>
				{menuItems.map(({ text, href }, index) => (
					<li
						key={`${href}_${index}`}
						onClick={() => router.push(href)}
					>
						<Link>{text}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Navbar
