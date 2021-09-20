import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import actions from '../actions'
import { KEY_MAPPING } from '../constants/button'

const getButtonNameByKey = key => {
  const button = KEY_MAPPING[key]
  if (button) return button
  if (/\d/.test(key)) return key
}

export default () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const handleKeyDown = e => {
      const value = getButtonNameByKey(e.key)
      if (value) dispatch(actions.calculate(value))
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
}
