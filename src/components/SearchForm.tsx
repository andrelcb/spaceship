"use client"
import { useState } from "react"

type Props = {
    onSearchButton: (mglt: number) => void
}

export const SearchForm = ({ onSearchButton }: Props) => {
    const [mgltInput, setMgltInput] = useState<number>(0);

    return (
        <div>
            <p className="mb-3 text-xl">Qual a distancia em MGLT</p>
            <input
                type="text"
                inputMode="numeric"
                placeholder="Digite a distancia em mega lights"
                autoFocus
                className="w-full p-3 bg-white text-black text-center text-4xl outline-none rounded-lg"
                value={mgltInput}
                onChange={e => setMgltInput(parseInt(e.target.value))}
            />
            <button className="w-full p-3 mt-3 rounded-lg text-white text-4xl bg-blue-800 border-b-4 border-blue-600 active:border-0"
                onClick={() => onSearchButton(mgltInput)}
            >
                Calcular
            </button>
        </div>
    )
}