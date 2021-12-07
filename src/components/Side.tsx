import Barcode from './Barcode'

import type { Item } from '../types'

type SideProps = {
  mySide: 'left' | 'right'
  myItem: Item | null
  otherItem: Item | null
}

const Side = ({ mySide, myItem, otherItem }: SideProps) => {
  const colorOK = myItem && myItem?.color === otherItem?.color
  const variantOK = myItem && myItem?.variant === otherItem?.variant

  return (
    <div className="h-full bg-white rounded-lg p-2 w-2/5 text-center shadow-xl flex flex-col justify-between items-center">
      <h2 className="text-4xl font-light">
        {mySide === 'left' ? 'Links' : 'Rechts'}
      </h2>

      <div className="text-5xl font-bold">
        {myItem && (
          <p className={`${colorOK ? 'text-lime-700' : 'text-red-600'}`}>
            {myItem.color}
          </p>
        )}
      </div>

      <div className="text-5xl font-bold">
        {myItem && (
          <p className={`${variantOK ? 'text-lime-700' : 'text-red-600'}`}>
            {myItem.variant} - Türer
          </p>
        )}
      </div>

      <div className="h-40">
        {colorOK && variantOK && <Barcode payload={myItem.output} />}
      </div>
    </div>
  )
}

export default Side
