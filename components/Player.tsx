import React, { useEffect } from 'react'
import { Button, Grid, Link } from '@nextui-org/react'
import { InfoCircle, Play, VolumeUp } from 'react-iconly'
import styles from '../styles/components/Player.module.scss'
import { ITrack } from '../types/track'
import { useRouter } from 'next/router'
import TrackProgress from '@/components/TrackProgress'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

let audio: any

const Player = () => {
	const router = useRouter()
	const { pause, volume, active, duration, currentTime } = useTypedSelector(state => state.player)
	const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack } = useActions()

	useEffect(() => {
		if (!audio) {
			audio = new Audio()
		} else {
			setAudio()
			play()
		}
	}, [active])

	const setAudio = () => {
		if (active) {
			audio.src = 'http://localhost:5000/api' + active.audio
			audio.volume = volume / 100
			audio.onloadedmetadata = () => {
				setDuration(Math.ceil(audio.duration))
			}
			audio.ontimeupdate = () => {
				setCurrentTime(Math.ceil(audio.currentTime))
			}
		}
	}

	const play = () => {
		if (pause) {
			playTrack()
			audio.play()
		} else {
			pauseTrack()
			audio.pause()
		}
	}

	const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.volume = Number(e.target.value) / 100
		setVolume(Number(e.target.value))
	}
	const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.currentTime = Number(e.target.value)
		setCurrentTime(Number(e.target.value))
	}

	if (!active) {
		return null
	}

	return (
		<div className={styles.player}>
			{pause
				? <Button onPress={play} css={{ marginRight: '8px' }} auto icon={<Play />} />
				: <Button onPress={play} css={{ marginRight: '8px' }} auto icon={<InfoCircle />} />
			}
			<Grid.Container direction='column' css={{ width: 200 }}>
				<Link onClick={() => router.push('/tracks/' + active?._id)}>{active?.name}</Link>
				<div style={{ fontSize: 12, color: 'gray' }}>{active?.artist}</div>
				{active && <div>02:42 / 03:22</div>}
			</Grid.Container>
			<TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
			<VolumeUp style={{ marginLeft: 'auto', marginRight: '8px' }} />
			<TrackProgress left={volume} right={100} onChange={changeVolume} />
		</div>
	)
}

export default Player
