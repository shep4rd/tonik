import Timer from '@/components/game/timer';
import TextCurrent from '@/components/game/text-current';
import InputGame from '@/components/game/input-game';
import {db, SentancesTable} from "@/lib/drizzle";
import {eq} from "drizzle-orm";

export default async function Game() {

  const getCurrentSentenceId = () => {
    const time = new Date()
    const minutes = time.getMinutes()

    return minutes % 3 + 1;
  }

  const currentId = getCurrentSentenceId();

  let textCurrent
  try {
    const sentences = await db.select().from(SentancesTable).where(eq(SentancesTable.id, currentId))
    textCurrent = sentences[0].text
  } catch (e: any) {
    console.error(e)
    textCurrent = 'Something went wrong'
  }

  return (
    <div className="m-5 flex flex-col">
      <Timer/>
      <TextCurrent text={textCurrent} />
      <InputGame />
    </div>
  )
}
