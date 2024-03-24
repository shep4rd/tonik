export default function ButtonJoin({ className }: { className?: string }) {
  return (
    <button
      className="group mt-20 sm:mt-0 rounded-full flex align-middle justify-center space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
    >
      <p>Join</p>
    </button>
  )
}
