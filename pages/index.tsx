import type { NextPage } from 'next'
import styles from '../styles/pages/Home.module.scss'
import { Text } from '@nextui-org/react'
import MainLayout from '../layouts/MainLayout'

const Home: NextPage = () => {
	return (
		<MainLayout>
			<Text
				h1
				css={{ textGradient: '45deg, $blue600 -20%, $pink600 50%' }}
				margin='0 0 16px 0'
			>Welcome to Aln music the best platform to listen music.</Text>
			<Text
				h3
				css={{ textGradient: '45deg, $pink600 -50%, $blue600 75%' }}
				margin='0'
			>There is packed the best songs!</Text>
		</MainLayout>
	)
}

export default Home
