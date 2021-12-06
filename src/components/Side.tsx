import Barcode from './Barcode'

import type { Item } from '../types'

type SideProps = {
  mySide: 'left' | 'right'
  myItem?: Item
  otherItem?: Item
}

const Side = ({ mySide, myItem, otherItem }: SideProps) => {
  const colorOK = myItem && myItem?.color === otherItem?.color
  const variantOK = myItem && myItem?.variant === otherItem?.variant

  return (
    <div>
      <h2>{mySide === 'left' ? 'Links' : 'Rechts'}</h2>

      {myItem && (
        <p style={{ color: `${colorOK ? 'green' : 'red'}` }}>{myItem.color}</p>
      )}
      {myItem && (
        <p style={{ color: `${variantOK ? 'green' : 'red'}` }}>
          {myItem.variant} - Türer
        </p>
      )}

      {colorOK && variantOK && <Barcode payload={myItem.output} />}
    </div>
  )
}

export default Side
