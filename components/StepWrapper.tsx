import React from 'react'
import { Props } from 'next/script'
import { Card, Container, Grid, Text } from '@nextui-org/react'
import styles from '../styles/components/StepWrapper.module.scss'
import classNames from 'classnames'

interface StepWrapperProps {
	activeStep: number
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите сам трек']

const StepWrapper: React.FC<StepWrapperProps & Props> = ({ activeStep, children }) => {
	return (
		<Container>
			<ul className='stepList'>
				{steps.map((step, index) =>
					<li
						key={index}
						className={classNames({
							'completed': activeStep >= index
						})}
					>
						<Text css={{ fontSize: 16, margin: 0 }}>{step}</Text>
					</li>
				)}
			</ul>
			<Grid.Container justify='center' css={{ margin: '70px 0', minHeight: 270 }}>
				<Card css={{ p: '$10' }}>
					{children}
				</Card>
			</Grid.Container>
		</Container>
	)
}

export default StepWrapper
