'use client'

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Join() {
  const [name, setName] = useState('')
  const router = useRouter()

  const onClick = async () => {
    try {
      await fetch('/player', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      })
      router.refresh();
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="flex p-4" >
      <input
        id="name"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={onClick}
        type="button"
        className="group mt-20 sm:mt-0 rounded-full flex align-middle justify-center space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
      >
        Join
      </button>
    </div>
  )
}
