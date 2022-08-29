import React, { useState } from 'react'
import type { NextPage } from 'next'
import { Button, Grid, Input, Text, Textarea } from '@nextui-org/react'
import MainLayout from '../../layouts/MainLayout'
import StepWrapper from '@/components/StepWrapper'
import styles from '../../styles/pages/Create.module.scss'
import FileUpload from '@/components/FileUpload'
import { useInput } from '../../hooks/useInput'
import axios from 'axios'
import { useRouter } from 'next/router'

const Tracks: NextPage = () => {
	const [activeStep, setActiveStep] = useState(0)
	const [picture, setPicture] = useState(null)
	const [audio, setAudio] = useState(null)
	const name = useInput('')
	const artist = useInput('')
	const text = useInput('')
	const router = useRouter()

	const back = () => {
		setActiveStep(prev => prev -= 1)
	}
	const next = () => {
		if (activeStep !== 2) {
			setActiveStep(prev => prev += 1)
		} else {
			const formData = new FormData()
			formData.append('name', name.value)
			formData.append('artist', artist.value)
			formData.append('text', text.value)
			// @ts-ignore
			formData.append('picture', picture)
			// @ts-ignore
			formData.append('audio', audio)
			axios.post('https://localhost:5000/api/tracks', formData)
				.then(res => router.push('/tracks'))
				.catch(e => console.log(e))
		}
	}

	return (
		<MainLayout>
			<Grid.Container direction='column' alignItems='flex-start' css={{ p: '$10', width: 900, margin: '0 auto' }}>
				<StepWrapper activeStep={activeStep}>
					{activeStep === 0 &&
					<Grid.Container direction='column'>
						<Input
							{...name}
							color='primary'
							bordered
							label='Название трека'
							fullWidth
							css={{ margin: '0 0 16px' }}
						/>
						<Input
							{...artist}
							color='primary'
							bordered
							label='Имя исполнителя'
							fullWidth
							css={{ margin: '0 0 16px' }}
						/>
						<Textarea
							{...text}
							color='primary'
							bordered
							label='Слова к треку'
							fullWidth
							rows={3}
							css={{ margin: '0 0 16px' }}
						/>
					</Grid.Container>
					}
					{activeStep === 1 &&
					<FileUpload setFile={setPicture} accept='image/*'>
						<Button bordered>Загрузить изображение</Button>
					</FileUpload>
					}
					{activeStep === 2 &&
					<FileUpload setFile={setAudio} accept='audio/*'>
						<Button bordered>Загрузить аудио</Button>
					</FileUpload>
					}
				</StepWrapper>
				<Grid.Container justify='space-between'>
					<Button onPress={back} disabled={activeStep === 0}>Back</Button>
					<Button onPress={next}>Next</Button>
				</Grid.Container>
			</Grid.Container>
		</MainLayout>
	)
}

export default Tracks
