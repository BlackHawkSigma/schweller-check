import { ChangeEvent, KeyboardEventHandler, useRef, useState } from 'react'

type ScannerProps = {
  onChange: (text: string) => void
}

const Scanner = ({ onChange }: ScannerProps) => {
  const [value, setValue] = useState<string>('')
  const input = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    if (e.target.value.length === 8) {
      onChange(e.target.value)
      setValue('')
      input.current?.focus()
    }
  }

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      onChange(value)
      setValue('')
      input.current?.focus()
    }
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
      onKeyPress={handleKeyPress}
      onBlur={handleBlur}
    />
  )
}

export default Scanner
