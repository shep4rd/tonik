import {
  doublePrecision,
  pgTable,
  serial,
  integer,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'

export const PlayersTable = pgTable(
  'players',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    progress: text('progress').default('').notNull(),
    wpm: integer('wpm').default(0).notNull(),
    accuracy: doublePrecision('accuracy').default(0.00).notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.name),
    }
  }
)

export type Player = InferSelectModel<typeof PlayersTable>
export type NewPlayer = InferInsertModel<typeof PlayersTable>

export const SentancesTable = pgTable(
  'sentences',
  {
    id: serial('id').primaryKey(),
    text: text('text').notNull(),
  }
)

export type Sentence = InferSelectModel<typeof SentancesTable>
export type NewSentences = InferInsertModel<typeof SentancesTable>

// Connect to Vercel Postgres
export const db = drizzle(sql)
