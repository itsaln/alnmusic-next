import React from 'react'
import { Button, Grid, Link } from '@nextui-org/react'
import { InfoCircle, Play, VolumeUp } from 'react-iconly'
import styles from '../styles/components/Player.module.scss'
import { ITrack } from '../types/track'
import { useRouter } from 'next/router'
import TrackProgress from '@/components/TrackProgress'

const Player = () => {
	const track: ITrack = {
		_id: '1',
		name: 'Track 1',
		artist: 'Singer 1',
		text: 'About song 1',
		listens: 5,
		audio: 'http://localhost:5000/audio/99596b50-5063-4595-8618-2b1226d3a28f.mp3',
		picture: 'http://localhost:5000/image/38894b55-5107-4955-b5ae-73b21ebbcefb.jpg',
		comments: []
	}
	const router = useRouter()
	const active = false

	return (
		<div className={styles.player}>
			{!active
				? <Button css={{ marginRight: '8px' }} auto icon={<Play />} />
				: <Button css={{ marginRight: '8px' }} auto icon={<InfoCircle />} />
			}
			<Grid.Container direction='column' css={{ width: 200 }}>
				<Link onClick={() => router.push('/tracks/' + track._id)}>{track.name}</Link>
				<div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
				{active && <div>02:42 / 03:22</div>}
			</Grid.Container>
			<TrackProgress left={0} right={100} onChange={() => ({})} />
			<VolumeUp style={{ marginLeft: 'auto', marginRight: '8px' }} />
			<TrackProgress left={0} right={100} onChange={() => ({})} />
		</div>
	)
}

export default Player
