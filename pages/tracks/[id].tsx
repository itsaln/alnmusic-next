import React, { useState } from 'react'
import { ITrack } from '../../types/track'
import MainLayout from '../../layouts/MainLayout'
import { Button, Grid, Image, Input, Text, Textarea } from '@nextui-org/react'
import { useRouter } from 'next/router'
import type { GetServerSideProps } from 'next'
import axios from 'axios'
import { useInput } from '../../hooks/useInput'

const TrackPage = ({ serverTrack }) => {
	const [track, setTrack] = useState<ITrack>(serverTrack)
	const router = useRouter()
	const username = useInput('')
	const text = useInput('')

	const addComment = async () => {
		try {
			const response = await axios.post('https://localhost:5000/api/tracks/comment', {
				username: username.value,
				text: text.value,
				trackId: track._id
			})
			setTrack({...track, comments: [...track.comments, response.data]})
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<MainLayout>
			<Grid.Container direction='column' alignItems='flex-start' css={{ p: '$10', width: 900, margin: '0 auto' }}>
				<Button
					bordered
					onClick={() => router.push('/tracks')}
					style={{ fontSize: 18 }}
				>To List</Button>
				<Grid.Container css={{ margin: '20px 0' }}>
					<Image
						width={200}
						height={200}
						src={'https://localhost:5000/api' + track.picture}
						alt={track.text}
						objectFit='cover'
						containerCss={{ margin: 0, borderRadius: '8px' }}
					/>
					<div style={{ margin: '16px 0 0 32px' }}>
						<Text h2 css={{ margin: '0 0 12px' }}>Name - {track.name}</Text>
						<Text h2 css={{ margin: '0 0 12px' }}>Singer - {track.artist}</Text>
						<Text h2 css={{ margin: '0 0 12px' }}>Listen - {track.listens}</Text>
					</div>
				</Grid.Container>
				<Text h2 css={{ margin: '0 0 16px' }}>lyrics to song</Text>
				<Text css={{ margin: '0 0 16px' }}>{track.text}</Text>
				<Text h3 css={{ margin: '0 0 16px' }}>Comments</Text>
				<Grid.Container>
					<Input
						{...username}
						color='primary'
						bordered
						label='Your name'
						fullWidth
						css={{ margin: '0 0 16px' }}
					/>
					<Textarea
						{...text}
						color='primary'
						bordered
						label='Comment'
						fullWidth
						rows={4}
						css={{ margin: '0 0 16px' }}
					/>
					<Button onPress={addComment}>Submit</Button>
				</Grid.Container>
				<div>
					{track.comments.map(comment =>
						<div key={comment._id}>
							<div>Author - {comment.username}</div>
							<div>Comment - {comment.text}</div>
						</div>
					)}
				</div>
			</Grid.Container>
		</MainLayout>
	)
}

export default TrackPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const response = await axios.get('https://localhost:5000/api/tracks/' + params.id)
	return {
		props: {
			serverTrack: response.data
		}
	}
}
