import { useState } from 'react'

import Scanner from './components/Scanner'
import Side from './components/Side'
import ResetButton from './components/ResetButton'
import useTimeout from './hooks/useTimeout'
import useIsMatch from './hooks/useIsMatch'

import data from './data.json'

import type { Item } from './types'

function App() {
  const [leftItem, setLeftItem] = useState<Item | null>(null)
  const [rightItem, setRightItem] = useState<Item | null>(null)

  const handleInput = (code: string) => {
    if (leftItem && rightItem) {
      handleReset()
    }

    const part = data.find((d) => d.input === code)

    if (part?.side === 'left') setLeftItem(part)
    if (part?.side === 'right') setRightItem(part)
  }

  const handleReset = () => {
    setLeftItem(null)
    setRightItem(null)
  }

  // clear items after timeout
  useTimeout(
    () => {
      handleReset()
    },
    leftItem && rightItem ? 30_000 : null
  )

  const isMatch = useIsMatch(leftItem, rightItem)

  return (
    <div className="p-6 bg-gray-50 h-screen w-screen">
      <div
        className={`${
          isMatch ? 'bg-lime-500' : 'bg-gray-200'
        } p-2 h-full rounded-2xl text-center`}
      >
        <div className="h-1/6 flex">
          <Scanner onChange={handleInput}></Scanner>
        </div>

        <div className="h-4/6 flex justify-around w-full">
          <Side mySide="left" myItem={leftItem} otherItem={rightItem}></Side>
          <Side mySide="right" myItem={rightItem} otherItem={leftItem}></Side>
        </div>

        <div className="h-1/6 flex">
          <ResetButton onClick={handleReset} />
        </div>
      </div>
    </div>
  )
}

export default App
