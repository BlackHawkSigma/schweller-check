import type { Item } from '../types'

const useIsMatch = (first: Item | null, second: Item | null): boolean => {
  return (
    first !== null &&
    second !== null &&
    first.color === second.color &&
    first.variant === second.variant
  )
}

export default useIsMatch
