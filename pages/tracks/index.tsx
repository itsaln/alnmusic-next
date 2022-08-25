import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../../styles/pages/Tracks.module.scss'
import { Button, Card, Grid, Text } from '@nextui-org/react'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'
import TrackList from '@/components/TrackList'

const Tracks: NextPage = () => {
	const router = useRouter()
	const tracks: ITrack[] = [
		{
			_id: '1',
			name: 'Track 1',
			artist: 'Singer 1',
			text: 'About song 1',
			listens: 5,
			audio: 'http://localhost:5000/audio/99596b50-5063-4595-8618-2b1226d3a28f.mp3',
			picture: 'http://localhost:5000/image/38894b55-5107-4955-b5ae-73b21ebbcefb.jpg',
			comments: []
		},
		{
			_id: '1',
			name: 'Track 2',
			artist: 'Singer 2',
			text: 'About song 2',
			listens: 5,
			audio: 'http://localhost:5000/audio/99596b50-5063-4595-8618-2b1226d3a28f.mp3',
			picture: 'http://localhost:5000/image/38894b55-5107-4955-b5ae-73b21ebbcefb.jpg',
			comments: []
		},
		{
			_id: '1',
			name: 'Track 3',
			artist: 'Singer 3',
			text: 'About song 3',
			listens: 5,
			audio: 'http://localhost:5000/audio/99596b50-5063-4595-8618-2b1226d3a28f.mp3',
			picture: 'http://localhost:5000/image/38894b55-5107-4955-b5ae-73b21ebbcefb.jpg',
			comments: []
		}
	]

	return (
		<MainLayout>
			<Grid.Container justify='center'>
				<Card css={{ p: '$10', width: 900 }}>
					<Grid.Container justify='space-between' alignItems='center' css={{ margin: '0 0 32px' }}>
						<Text h2 css={{ margin: 0 }}>List of tracks</Text>
						<Button onClick={() => router.push('/tracks/create')}>Upload</Button>
					</Grid.Container>
					<TrackList tracks={tracks} />
				</Card>
			</Grid.Container>
		</MainLayout>
	)
}

export default Tracks
