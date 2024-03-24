import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table/table-placeholder'
import ButtonJoin from '@/components/button-join'
import Game from '@/components/game'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">



      <ButtonJoin />

      <Game />

      <Suspense fallback={<TablePlaceholder />}>
        <Table />
      </Suspense>
    </main>
  )
}
