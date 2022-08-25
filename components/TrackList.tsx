import React from 'react'
import styles from '../styles/components/TrackList.module.scss'
import { Grid } from '@nextui-org/react'
import { ITrack } from '../types/track'
import TrackItem from '@/components/TrackItem'

interface TrackListProps {
	tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
	return (
		<Grid.Container direction='column'>
			<div>
				{tracks.map(track =>
					<TrackItem
						key={track._id}
						track={track}
					/>
				)}
			</div>
		</Grid.Container>
	)
}

export default TrackList
