import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../../styles/pages/Tracks.module.scss'
import { Button, Card, Grid, Text } from '@nextui-org/react'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'
import TrackList from '@/components/TrackList'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { NextThunkDispatch, wrapper } from '../../store'
import { fetchTracks } from '../../store/actions/track'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Tracks: NextPage = () => {
	const router = useRouter()
	const { tracks, error } = useTypedSelector(state => state.track)

	// const dispatch = useDispatch()

	// @ts-ignore
	// dispatch(fetchTracks())

	if (error) {
		return (
			<MainLayout>
				<h1>{error}</h1>
			</MainLayout>
		)
	}

	return (
		<MainLayout>
			<Grid.Container justify='center'>
				<Card css={{ p: '$10', width: 900 }}>
					<Grid.Container justify='space-between' alignItems='center' css={{ margin: '0 0 32px' }}>
						<Text h3 css={{ margin: 0 }}>List of tracks</Text>
						<Button onClick={() => router.push('/tracks/create')}>Upload</Button>
					</Grid.Container>
					<TrackList tracks={tracks} />
				</Card>
			</Grid.Container>
		</MainLayout>
	)
}

export default Tracks

// export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
// 	console.log(store)
// })

// @ts-ignore
// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
// 	const dispatch = store.dispatch as NextThunkDispatch
// 	await dispatch(await fetchTracks())
// })
