import type { NextPage } from 'next'
import styles from '../../styles/pages/Create.module.scss'
import MainLayout from '../../layouts/MainLayout'
import { Text } from '@nextui-org/react'

const Tracks: NextPage = () => {
	return (
		<MainLayout>
			<Text h2 css={{ margin: 0 }}>Upload song</Text>
		</MainLayout>
	)
}

export default Tracks
