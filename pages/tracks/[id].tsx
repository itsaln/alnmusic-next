import React from 'react'
import { ITrack } from '../../types/track'
import MainLayout from '../../layouts/MainLayout'
import { Button, Grid, Image, Input, Text, Textarea } from '@nextui-org/react'
import { useRouter } from 'next/router'

const TrackPage = () => {
	const track: ITrack = {
		_id: '12345678_1',
		name: 'Track 1',
		artist: 'Singer 1',
		text: 'About song 1',
		listens: 5,
		audio: 'http://localhost:5000/audio/99596b50-5063-4595-8618-2b1226d3a28f.mp3',
		picture: 'http://localhost:5000/image/38894b55-5107-4955-b5ae-73b21ebbcefb.jpg',
		comments: []
	}
	const router = useRouter()

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
						src={track.picture}
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
						color='primary'
						bordered
						label='Your name'
						fullWidth
						css={{ margin: '0 0 16px' }}
					/>
					<Textarea
						color='primary'
						bordered
						label='Comment'
						fullWidth
						rows={4}
						css={{ margin: '0 0 16px' }}
					/>
					<Button>Submit</Button>
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
