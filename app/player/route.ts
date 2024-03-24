import {db, PlayersTable} from "@/lib/drizzle";
import {cookies} from "next/headers";

export async function POST(req: Request) {
  const cookieStore = cookies();
  const data = await req.json()

  // add validation if already exists

  try {
    await db
      .insert(PlayersTable)
      .values(data)
      .returning()

    cookieStore.set('player_name', data.name);
  } catch (e) {
    console.error(e)
  }


  return new Response('', {
    status: 200,
    headers: { 'Set-Cookie': `player_name=${data.name}`},
  })
}