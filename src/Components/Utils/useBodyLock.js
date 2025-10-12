import { useEffect, useRef } from 'react'

export function useBodyLock(isLocked) {
  const previousOverflowRef = useRef('')

  useEffect(() => {
    const { body } = document

    if (isLocked) {
      previousOverflowRef.current = body.style.overflow
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = previousOverflowRef.current || ''
    }

    return () => {
      body.style.overflow = previousOverflowRef.current || ''
    }
  }, [isLocked])
}
