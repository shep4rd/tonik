import {Suspense} from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table/table-placeholder'
import Join from '@/components/join'
import Game from '@/components/game'
import {cookies} from "next/headers";

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export default async function Home() {
  let playerName = cookies().get('player_name')?.value || '';

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      {playerName ? <Game /> : <Join />}

      <Suspense fallback={<TablePlaceholder />}>
        <Table />
      </Suspense>
    </main>
  )
}
