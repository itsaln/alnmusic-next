import React from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Grid, Image, Link } from '@nextui-org/react'
import { Play, InfoCircle, Delete } from 'react-iconly'
import styles from '../styles/components/TrackItem.module.scss'
import { ITrack } from '../types/track'

interface TrackItemProps {
	track: ITrack
	active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
	const router = useRouter()

	return (
		<Card className={styles.track}>
			{!active
				? <Button auto icon={<Play />} />
				: <Button auto icon={<InfoCircle />} />
			}
			<Image
				width={70}
				height={70}
				src={track.picture}
				alt={track.text}
				objectFit='cover'
				containerCss={{ margin: '0 24px 0 20px', borderRadius: '8px' }}
			/>
			<Grid.Container direction='column' css={{ width: 200 }}>
				<Link href='javascript:' onClick={() => router.push('/tracks/' + track._id)}>{track.name}</Link>
				<div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
				{active && <div>02:42 / 03:22</div>}
			</Grid.Container>
			<Button auto color='error' icon={<Delete />} css={{ marginLeft: 'auto' }} />
		</Card>
	)
}

export default TrackItem
