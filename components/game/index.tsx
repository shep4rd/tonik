import Timer from '@/components/game/timer';
import TextCurrent from '@/components/game/text-current';
import InputGame from '@/components/game/input-game';

export default function Game({ className }: { className?: string }) {
  return (
    <div className="m-5 flex flex-col">
      <Timer/>
      <TextCurrent/>
      <InputGame />
    </div>
  )
}
