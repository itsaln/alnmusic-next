import React, { useState } from 'react'
import type { NextPage } from 'next'
import { Button, Grid, Text } from '@nextui-org/react'
import MainLayout from '../../layouts/MainLayout'
import StepWrapper from '@/components/StepWrapper'
import styles from '../../styles/pages/Create.module.scss'

const Tracks: NextPage = () => {
	const [activeStep, setActiveStep] = useState(0)
	const back = () => {
		setActiveStep(prev => prev - 1)
	}
	const next = () => {
		setActiveStep(prev => prev + 1)
	}

	return (
		<MainLayout>
			<Grid.Container direction='column' alignItems='flex-start' css={{ p: '$10', width: 900, margin: '0 auto' }}>
				<StepWrapper activeStep={activeStep}>
					<Text h3 css={{ margin: '0 0 12px' }}>Download song</Text>
				</StepWrapper>
				<Grid.Container justify='space-between'>
					<Button onClick={back}>Back</Button>
					<Button onClick={next}>Next</Button>
				</Grid.Container>
			</Grid.Container>
		</MainLayout>
	)
}

export default Tracks
