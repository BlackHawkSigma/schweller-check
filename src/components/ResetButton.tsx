type ResetButtonProps = {
  onClick: () => void
}

const ResetButton = ({ onClick }: ResetButtonProps) => (
  <button
    className="text-2xl bg-red-500 px-6 py-4 shadow-xl rounded"
    onClick={onClick}
  >
    Reset
  </button>
)

export default ResetButton
