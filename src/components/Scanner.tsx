import { ChangeEvent, useRef, useState } from 'react'

type ScannerProps = {
  onChange: (text: string) => void
}

const Scanner = ({ onChange }: ScannerProps) => {
  const [value, setValue] = useState<string>('')
  const input = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
    setValue('')
    input.current?.focus()
  }

  return (
    <input
      className="h-12 p-2 m-auto text-lg text-center focus:border-gray-500 outline-none rounded shadow"
      placeholder="Barcode scannen"
      type="text"
      autoFocus
      ref={input}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  )
}

export default Scanner
