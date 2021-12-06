type ScannerProps = {
  onChange: (text: string) => void
}

const Scanner = ({ onChange }: ScannerProps) => {
  return <input type="text" onChange={(e) => onChange(e.target.value)} />
}

export default Scanner
