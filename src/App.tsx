import { useState } from 'react'

import Scanner from './components/Scanner'
import Side from './components/Side'

import data from './data.json'

import type { Item } from './types'

function App() {
  const [leftItem, setLeftItem] = useState<Item | undefined>(undefined)
  const [rightItem, setRightItem] = useState<Item | undefined>(undefined)

  const handleInput = (code: string) => {
    const part = data.find((d) => d.input === code)

    if (part?.side === 'left') setLeftItem(part)
    if (part?.side === 'right') setRightItem(part)
  }

  const handleReset = () => {
    setLeftItem(undefined)
    setRightItem(undefined)
  }

  return (
    <div style={{ display: 'grid' }}>
      <div>
        <Scanner onChange={handleInput}></Scanner>
      </div>

      <div>
        <Side mySide="left" myItem={leftItem} otherItem={rightItem}></Side>
        <Side mySide="right" myItem={rightItem} otherItem={leftItem}></Side>
      </div>

      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
