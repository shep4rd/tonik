import {eq} from 'drizzle-orm';
import {db, SentancesTable} from "@/lib/drizzle";
import {seed} from "@/lib/seed";

export default async function TextCurrent({ text }: { text: string }) {
  return (
    <p className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#4b4b4b] bg-clip-text text-center font-medium tracking-tight text-transparent">
      {text}
    </p>
  )
}
