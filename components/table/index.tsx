import { db, PlayersTable } from '@/lib/drizzle'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import { seed } from '@/lib/seed'

export default async function Index() {
  let players
  let startTime = Date.now()

  try {
    players = await db.select().from(PlayersTable)
  } catch (e: any) {
    if (e.message === `relation "players" does not exist`) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      startTime = Date.now()
      players = await db.select().from(PlayersTable)
    } else {
      throw e
    }
  }

  const duration = Date.now() - startTime

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Players</h2>
          <p className="text-sm text-gray-500">
            Fetched {players.length} players in {duration}ms
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-900/5">
        {players.map((player) => (
          <div
            key={player.name}
            className="flex items-center justify-between py-3"
          >
            <p className="font-medium leading-none">{player.name}</p>
            <p className="text-sm text-gray-500">{timeAgo(player.createdAt)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
