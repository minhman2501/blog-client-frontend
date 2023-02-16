import { useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, RootState } from './store'
import { useSelector } from 'react-redux/es/exports'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSecletor: TypedUseSelectorHook<RootState> = useSelector
