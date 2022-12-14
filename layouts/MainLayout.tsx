import { Props } from 'next/script'
import React from 'react'
import { Container } from '@nextui-org/react'
import Navbar from '@/components/Navbar'
import Player from '@/components/Player'

const MainLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className='app'>
			<Navbar />
			<Container style={{ margin: '90px 0' }}>
				{children}
			</Container>
			<Player />
		</div>
	)
}

export default MainLayout
