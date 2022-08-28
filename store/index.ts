import { Context, createWrapper, MakeStore } from 'next-redux-wrapper'
import { reducer, RootState } from './reducers'
import { createStore } from 'redux'

// @ts-ignore
const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer)

// @ts-ignore
export const wrapper = createWrapper<RootState>(makeStore, { debug: true })
