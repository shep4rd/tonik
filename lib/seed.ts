import { sql } from '@vercel/postgres'
import { db } from '@/lib/drizzle'
import { PlayersTable, Player, NewPlayer, SentancesTable, Sentence, NewSentences } from './drizzle'

const newPlayers: NewPlayer[] = [
  {
    name: 'Guillermo Rauch',
  },
  {
    name: 'Lee Robinson',
  },
  {
    name: 'Steven Tey',
  },
]

const newSentences: NewSentences[] = [
  {
    text: 'If you\'re visiting this page, you\'re likely here because you\'re searching for a random sentence. Sometimes a random word just isn\'t enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.'
  },
  {
    text: 'For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity. The most common way to use the sentence is to begin a story. Another option is to include it somewhere in the story. A much more difficult challenge is to use it to end a story. In any of these cases, it forces the writer to think creatively since they have no idea what sentence will appear from the tool.'
  },
  {
    text: 'For those writers who have writers\' block, this can be an excellent way to take a step to crumbling those walls. By taking the writer away from the subject matter that is causing the block, a random sentence may allow them to see the project they\'re working on in a different light and perspective. Sometimes all it takes is to get that first sentence down to help break the block.'
  }
]

export async function seed() {
  // Create table with raw SQL
  const createTablePlayers = await sql.query(`
      CREATE TABLE IF NOT EXISTS players (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        progress VARCHAR(255) NOT NULL DEFAULT '',
        wpm integer DEFAULT 0,
        accuracy double precision DEFAULT 0.00,
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
  `)

  const createTableSentences = await sql.query(`
     CREATE TABLE IF NOT EXISTS sentences (
        id SERIAL PRIMARY KEY,
        "text" text NOT NULL
      );
  `)

  const insertedPlayers: Player[] = await db
    .insert(PlayersTable)
    .values(newPlayers)
    .returning()

  const insertedSentences: Sentence[] = await db
    .insert(SentancesTable)
    .values(newSentences)
    .returning()

  return {
    createTablePlayers,
    createTableSentences,
    insertedPlayers,
    insertedSentences
  }
}

